import React, { useState, useEffect, useMemo } from 'react';
import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectMap } from '../components/ProjectMap';
import { PricingRequestForm } from '../components/PricingRequestForm';
import { ArrowRight, Sparkles, Building, MapPin, Compass, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { THE_CREST_IMAGES, SAFIA_CLEAN_IMAGES, CREEK_TOWN_IMAGES, GO_HELIOPOLIS_IMAGES } from '../data/projectImages';

interface HomePageProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  onNavigate: (page: string) => void;
  onOpenEnquire: () => void;
  language?: 'EN' | 'AR';
}

export const HomePage: React.FC<HomePageProps> = ({
  projects,
  onSelectProject,
  onNavigate,
  onOpenEnquire,
  language = 'EN'
}) => {
  const isArabic = language === 'AR';
  // Show featured top 4 projects on concise home page
  const featuredProjects = projects.slice(0, 4);

  // Background images from projects
  const bgSlides = useMemo(() => {
    if (projects && projects.length > 0) {
      return projects.map((p) => ({
        id: p.id,
        url: p.heroImage || p.image,
        name: p.name,
        location: p.location
      }));
    }
    return [
      { id: 'crest', url: THE_CREST_IMAGES.hero, name: 'THE CREST', location: 'New Cairo' },
      { id: 'safia', url: SAFIA_CLEAN_IMAGES.hero, name: 'SAFIA', location: 'Ras El Hekma' },
      { id: 'creek', url: CREEK_TOWN_IMAGES.hero, name: 'CREEK TOWN', location: 'First Settlement' },
      { id: 'go', url: GO_HELIOPOLIS_IMAGES.hero, name: 'GO HELIOPOLIS', location: 'Heliopolis' }
    ];
  }, [projects]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (bgSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % bgSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [bgSlides]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % bgSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + bgSlides.length) % bgSlides.length);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Banner Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white pt-24 sm:pt-28 pb-12">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {bgSlides.map((slide, idx) => (
            <div
              key={slide.id || idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlideIndex ? 'opacity-90 scale-105 transition-transform duration-7000' : 'opacity-0 pointer-events-none scale-100'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Hero Brand Intro */}
            <div className={`lg:col-span-7 space-y-6 pt-2 ${isArabic ? 'text-right' : 'text-center lg:text-left'}`}>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.1]">
                IL CAZAR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-amber-200">
                  DEVELOPMENTS
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed">
                {isArabic
                  ? 'صناعة تحف معمارية فاخرة في القاهرة الجديدة، رأس الحكمة، والعلمين الجديدة. حيث تلتقي الدقة الهندسة مع الحياة الفارهة.'
                  : 'Crafting architectural landmarks in New Cairo, Ras El Hekma, and New Alamein. Where geometric precision meets natural water sanctuaries.'}
              </p>

              <div className={`pt-2 flex flex-col sm:flex-row items-center gap-4 ${isArabic ? 'justify-end lg:justify-start' : 'justify-center lg:justify-start'}`}>
                <button
                  onClick={() => onNavigate('projects')}
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>{isArabic ? 'استكشف المشاريع' : 'Explore Projects'}</span>
                  <ArrowRight className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={onOpenEnquire}
                  className="w-full sm:w-auto px-8 py-4 bg-neutral-900/80 hover:bg-black text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-md transition-all hover:border-white/40"
                >
                  {isArabic ? 'استفسر الآن' : 'Enquire Now'}
                </button>
              </div>

              {/* Current Active Project Background Indicator */}
              <div className="pt-4 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-semibold text-white/90">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>
                    {isArabic ? 'المشروع المعروض:' : 'Featured Project:'}{' '}
                    <strong className="text-amber-300">{bgSlides[currentSlideIndex]?.name}</strong> ({bgSlides[currentSlideIndex]?.location})
                  </span>
                </div>

                {/* Slideshow Controls */}
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-full px-2 py-1">
                  <button
                    onClick={handlePrevSlide}
                    className="p-1 hover:text-amber-400 transition-colors"
                    title="Previous Project"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-1 px-1">
                    {bgSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentSlideIndex ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleNextSlide}
                    className="p-1 hover:text-amber-400 transition-colors"
                    title="Next Project"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Form Card positioned at the top right next to company title */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <PricingRequestForm projects={projects} language={language} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flagship Portfolio (Concise Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              {isArabic ? 'المشاريع الاستثنائية' : 'Flagship Portfolio'}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mt-1">
              {isArabic ? 'أبرز مشروعاتنا' : 'Featured Developments'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-amber-600 flex items-center gap-1 group"
          >
            <span>{isArabic ? 'عرض جميع المشاريع' : 'View All Projects'}</span>
            <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isArabic ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              language={language}
            />
          ))}
        </div>
      </section>

      {/* Interactive Map Showcase Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                {isArabic ? 'التوزيع الجغرافي' : 'Geographic Footprint'}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
                {isArabic ? 'مواقع استراتيجية في أرقى بقاع مصر' : 'Prime Locations Across Egypt'}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-neutral-600">{isArabic ? 'المواقع في:' : 'Locations in:'}</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-bold shadow-sm border border-neutral-200">
                {isArabic ? 'القاهرة الجديدة' : 'New Cairo'}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-bold shadow-sm border border-neutral-200">
                {isArabic ? 'رأس الحكمة' : 'Ras El Hekma'}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-bold shadow-sm border border-neutral-200">
                {isArabic ? 'العلمين الجديدة' : 'New Alamein'}
              </span>
            </div>
          </div>

          <ProjectMap
            projects={projects}
            onSelectProject={onSelectProject}
            height="420px"
          />
        </div>
      </section>

      {/* Private Consultation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-neutral-950 text-white p-8 sm:p-14 shadow-2xl border border-neutral-800">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {isArabic ? 'تملك حصري وفاخر' : 'Exclusive Ownership'}
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              {isArabic ? 'احجز جلستك الاستشارية الخاصة الآن' : 'Schedule Your Private Advisory Session'}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {isArabic
                ? 'تواصل مباشرة مع مستشارينا العقاريين للاطلاع على المخططات الرسمية، توفر الوحدات، وخطط السداد المرنة حتى 8 سنوات.'
                : 'Connect directly with our luxury real estate consultants for masterplans, unit availability, and flexible 8-year payment options.'}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquire}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg"
              >
                {isArabic ? 'طلب استشارة خاصة' : 'Request Private Consultation'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
