import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectMap } from '../components/ProjectMap';
import { PricingRequestForm } from '../components/PricingRequestForm';
import {
  ArrowRight,
  Sparkles,
  Building2,
  MapPin,
  Compass,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  MessageCircle,
  ExternalLink,
  Award,
  Layers
} from 'lucide-react';
import {
  THE_CREST_IMAGES,
  SAFIA_CLEAN_IMAGES,
  CREEK_TOWN_IMAGES,
  GO_HELIOPOLIS_IMAGES,
  VEA_IMAGES,
  C_NORTH_IMAGES
} from '../data/projectImages';

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
  const featuredProjects = projects.slice(0, 4);

  // Background images from projects with fallback
  const bgSlides = useMemo(() => {
    if (projects && projects.length > 0) {
      return projects.map((p) => ({
        id: p.id,
        url: p.heroImage || p.image,
        name: isArabic ? p.nameAr || p.name : p.name,
        location: isArabic ? p.locationAr || p.location : p.location,
        tagline: isArabic ? p.taglineAr || p.tagline : p.tagline,
        startingPrice: isArabic ? p.startingPriceAr || p.startingPrice : p.startingPrice
      }));
    }
    return [
      {
        id: 'the-crest',
        url: THE_CREST_IMAGES.hero,
        name: isArabic ? 'ذا كريست' : 'THE CREST',
        location: isArabic ? 'التجمع السادس، القاهرة الجديدة' : '6th Settlement, New Cairo',
        tagline: isArabic ? 'مجتمع فيلات وشقق استثنائي' : 'Exclusive 158-Feddan Sanctuary',
        startingPrice: isArabic ? 'تبدأ من 8,200,000 ج.م' : 'From 8,200,000 EGP'
      },
      {
        id: 'safia',
        url: SAFIA_CLEAN_IMAGES.hero,
        name: isArabic ? 'صافية' : 'SAFIA',
        location: isArabic ? 'رأس الحكمة، الساحل الشمالي' : 'Ras El Hekma Bay, North Coast',
        tagline: isArabic ? 'مصاطب بارتفاع 40م بإطلالة مباشرة على البحر' : 'Cascading Mediterranean Sea Elevations',
        startingPrice: isArabic ? 'تبدأ من 7,900,000 ج.م' : 'From 7,900,000 EGP'
      },
      {
        id: 'vea',
        url: VEA_IMAGES.hero,
        name: isArabic ? 'فيا' : 'VÉA',
        location: isArabic ? 'التجمع السادس، القاهرة الجديدة' : '6th Settlement, New Cairo',
        tagline: isArabic ? 'فيلات فاخرة محاطة ببحيرات كريستالية' : '110-Feddan Villa Retreat & Crystal Lagoons',
        startingPrice: isArabic ? 'تبدأ من 16,500,000 ج.م' : 'From 16,500,000 EGP'
      },
      {
        id: 'c-north',
        url: C_NORTH_IMAGES.hero,
        name: isArabic ? 'سي نورث' : 'C NORTH',
        location: isArabic ? 'الكيلو 182 رأس الحكمة' : 'KM 182 Ras El Hekma Bay',
        tagline: isArabic ? 'شاطئ رملي خاص وبحيرات لاجونز نقية' : 'Pristine Beach Sanctuary & Lagoons',
        startingPrice: isArabic ? 'تبدأ من 8,500,000 ج.م' : 'From 8,500,000 EGP'
      },
      {
        id: 'creek-town',
        url: CREEK_TOWN_IMAGES.hero,
        name: isArabic ? 'كريك تاون' : 'CREEK TOWN',
        location: isArabic ? 'التجمع الأول، طريق السويس' : 'First Settlement, Suez Road',
        tagline: isArabic ? 'مجتمع متكامل الخدمات' : 'Iconic 100-Feddan Mixed-Use Haven',
        startingPrice: isArabic ? 'تبدأ من 9,000,000 ج.م' : 'From 9,000,000 EGP'
      },
      {
        id: 'go-heliopolis',
        url: GO_HELIOPOLIS_IMAGES.hero,
        name: isArabic ? 'جو هليوبوليس' : 'GO HELIOPOLIS',
        location: isArabic ? 'قلب مصر الجديدة، القاهرة' : 'Prime City Location, Heliopolis',
        tagline: isArabic ? 'تسليم فوري وموقع استراتيجي' : 'Delivered Mixed-Use Complex',
        startingPrice: isArabic ? 'تبدأ من 6,500,000 ج.م' : 'From 6,500,000 EGP'
      }
    ];
  }, [projects, isArabic]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum distance in px required to trigger swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    if (bgSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % bgSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [bgSlides]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % bgSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + bgSlides.length) % bgSlides.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isArabic) {
      if (isLeftSwipe) handlePrevSlide();
      if (isRightSwipe) handleNextSlide();
    } else {
      if (isLeftSwipe) handleNextSlide();
      if (isRightSwipe) handlePrevSlide();
    }
  };

  const currentProject = bgSlides[currentSlideIndex];

  return (
    <div className="space-y-16 pb-12 overflow-x-hidden">
      {/* Hero Banner Section */}
      <section
        aria-label="Hero Showcase"
        className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Slideshow with Smooth Crossfade & Zoom */}
        <div className="absolute inset-0 z-0">
          {bgSlides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <div
                key={slide.id || idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-105 transition-transform duration-[6000ms]'
                    : 'opacity-0 pointer-events-none scale-100'
                }`}
              >
                <img
                  src={slide.url}
                  alt={`${slide.name} - ${slide.location} | IL CAZAR Developments`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            );
          })}

          {/* High Contrast Multi-layer Gradients for Maximum Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 pointer-events-none" />
          <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
        </div>

        {/* Hero Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Column: Brand Intro & Project Highlights */}
            <div className={`lg:col-span-7 space-y-6 sm:space-y-8 ${isArabic ? 'text-right' : 'text-left'}`}>
              
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/40 backdrop-blur-md shadow-lg">
                <Sparkles className="h-3.5 w-3.5 text-white animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white">
                  {isArabic ? 'إل كازار للتطوير العقاري • الفئة الأولى (Grade A)' : 'IL CAZAR DEVELOPMENTS • GRADE A DEVELOPER'}
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.08] text-white drop-shadow-md">
                  IL CAZAR <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-100">
                    {isArabic ? 'إتقان معماري خالد' : 'DEVELOPMENTS'}
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-200 max-w-xl font-light leading-relaxed drop-shadow">
                  {isArabic
                    ? 'مجتمعات سكنية واستثمارية فائقة الفخامة في القاهرة الجديدة، رأس الحكمة، والعلمين الجديدة. تصميمات عالمية، بحيرات كريستالية، وخطط سداد مريحة حتى 10 سنوات.'
                    : 'Crafting master-planned luxury sanctuaries across New Cairo, Ras El Hekma, and New Alamein. Architectural precision with water sanctuaries and up to 10-year flexible payment terms.'}
                </p>
              </div>

              {/* Primary Call-To-Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onNavigate('projects')}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-white to-neutral-200 hover:from-neutral-100 hover:to-neutral-100 text-neutral-950 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>{isArabic ? 'استكشف كافة المشروعات' : 'Explore All Projects'}</span>
                  <ArrowRight className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                </button>

                <button
                  onClick={onOpenEnquire}
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs uppercase tracking-widest rounded-xl backdrop-blur-md transition-all hover:border-white/60 flex items-center justify-center gap-2"
                >
                  <span>{isArabic ? 'طلب استشارة ومخطط' : 'Request Masterplan'}</span>
                </button>

                <a
                  href="tel:16547"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 bg-black/60 hover:bg-black/90 text-white border border-white/30 rounded-xl text-xs font-bold transition-all"
                >
                  <PhoneCall className="h-4 w-4 text-white" />
                  <span>16547</span>
                </a>
              </div>

              {/* Interactive Active Project Showcase Card */}
              <div className="pt-3">
                <div className="bg-black/65 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all hover:border-white/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    
                    {/* Project Information */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{currentProject?.location}</span>
                      </div>
                      <h2 className="font-heading text-lg sm:text-xl font-black text-white">
                        {currentProject?.name}
                      </h2>
                      {currentProject?.tagline && (
                        <p className="text-xs text-neutral-300 line-clamp-1">
                          {currentProject.tagline}
                        </p>
                      )}
                    </div>

                    {/* Quick View Button & Navigation Controls */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                      <button
                        onClick={() => onSelectProject(currentProject?.id || 'the-crest')}
                        className="px-3 py-1.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span>{isArabic ? 'تفاصيل المشروع' : 'View Project'}</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>

                      {/* Slider Navigation Arrows & Dots */}
                      <div className="flex items-center gap-1.5 bg-black/60 border border-white/20 rounded-full px-2 py-1">
                        <button
                          onClick={handlePrevSlide}
                          className="p-1 hover:text-white transition-colors"
                          title={isArabic ? 'المشروع السابق' : 'Previous Project'}
                          aria-label="Previous Slide"
                        >
                          <ChevronLeft className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                        </button>

                        <div className="flex items-center gap-1 px-1">
                          {bgSlides.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentSlideIndex(idx)}
                              aria-label={`Slide ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all ${
                                idx === currentSlideIndex
                                  ? 'w-5 bg-white shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                                  : 'w-1.5 bg-white/40 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={handleNextSlide}
                          className="p-1 hover:text-white transition-colors"
                          title={isArabic ? 'المشروع التالي' : 'Next Project'}
                          aria-label="Next Slide"
                        >
                          <ChevronRight className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Column: Direct Pricing Request & Contact Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <PricingRequestForm projects={projects} language={language} />
            </div>

          </div>
        </div>
      </section>

      {/* Featured Flagship Portfolio (Concise Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              {isArabic ? 'المشاريع الاستثنائية' : 'Flagship Portfolio'}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mt-1">
              {isArabic ? 'أبرز مشروعاتنا' : 'Featured Developments'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-white flex items-center gap-1 group"
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

      {/* Interactive Map Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                {isArabic ? 'التوزيع الجغرافي' : 'Geographic Footprint'}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
                {isArabic ? 'مواقع استراتيجية في أرقى بقاع مصر' : 'Prime Locations Across Egypt'}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
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
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              {isArabic ? 'تملك حصري وفاخر' : 'Exclusive Ownership'}
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              {isArabic ? 'احجز جلستك الاستشارية الخاصة الآن' : 'Schedule Your Private Advisory Session'}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {isArabic
                ? 'تواصل مباشرة مع مستشارينا العقاريين للاطلاع على المخططات الرسمية، توفر الوحدات، وخطط السداد المرنة حتى 10 سنوات.'
                : 'Connect directly with our luxury real estate consultants for masterplans, unit availability, and flexible 10-year payment options.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnquire}
                className="px-8 py-3.5 bg-white hover:bg-white text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg"
              >
                {isArabic ? 'طلب استشارة خاصة' : 'Request Private Consultation'}
              </button>
              <a
                href="https://wa.me/201012268500"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{isArabic ? 'تواصل عبر واتساب' : 'WhatsApp Us'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
