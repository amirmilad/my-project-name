import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectMap } from '../components/ProjectMap';
import { BrochureModal } from '../components/BrochureModal';
import { ImageGalleryModal } from '../components/ImageGalleryModal';
import { SafeImage } from '../components/SafeImage';
import { 
  ArrowLeft, MapPin, Calendar, DollarSign, Layers, Download, Phone, 
  CheckCircle2, Compass, Maximize2, Share2, Sparkles, Building 
} from 'lucide-react';

interface ProjectDetailPageProps {
  project: Project;
  allProjects: Project[];
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
  onOpenEnquire: () => void;
  language?: 'EN' | 'AR';
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  allProjects,
  onBack,
  onSelectProject,
  onOpenEnquire,
  language = 'EN'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'units' | 'masterplan' | 'location'>('overview');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  const isArabic = language === 'AR';

  const displayName = isArabic && project.nameAr ? project.nameAr : project.name;
  const displayLocation = isArabic && project.locationAr ? project.locationAr : project.location;
  const displayDescription = isArabic && project.descriptionAr ? project.descriptionAr : project.description;
  const displayLandArea = isArabic && project.landAreaAr ? project.landAreaAr : project.landArea;
  const displayFootprint = isArabic && project.footprintAr ? project.footprintAr : project.footprint;
  const displayStartingPrice = isArabic && project.startingPriceAr ? project.startingPriceAr : project.startingPrice;
  const displayPaymentPlan = isArabic && project.paymentPlanAr ? project.paymentPlanAr : project.paymentPlan;
  const displayCategory = isArabic ? (project.categoryAr || (project.category === 'RESIDENTIAL' ? 'سكني' : 'تجاري')) : project.category;
  const displayStatus = isArabic ? (project.statusAr || (
    project.status === 'New Launch' ? 'إطلاق جديد' :
    project.status === 'Under Construction' ? 'قيد الإنشاء' :
    project.status === 'Delivered' ? 'تم التسليم' :
    project.status === 'Selling Fast' ? 'مبيعات متسارعة' :
    project.status === 'Ready To Move (RTM)' ? 'جاهز للانتقال' : project.status
  )) : project.status;

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      {/* Top Back Navigation Bar */}
      <div className="bg-neutral-900 text-white py-3 px-4 sm:px-8 border-b border-neutral-800 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
          >
            <ArrowLeft className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
            <span>{isArabic ? 'العودة لجميع المشاريع' : 'Back to All Projects'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBrochureOpen(true)}
              className="px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold tracking-wider uppercase rounded-lg border border-neutral-700 transition-colors flex items-center gap-1.5"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{isArabic ? 'الكتالوج والمعلومات' : 'Brochure & Fact Sheet'}</span>
            </button>
            <button
              onClick={onOpenEnquire}
              className="px-4 py-1.5 bg-white hover:bg-white text-neutral-950 text-xs font-bold tracking-wider uppercase rounded-lg transition-colors"
            >
              {isArabic ? 'استفسر الآن' : 'Enquire'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative h-[60vh] min-h-[420px] bg-neutral-950 text-white overflow-hidden">
        <SafeImage
          src={project.heroImage || project.image}
          fallbackSrc={project.image}
          alt={displayName}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 z-10 max-w-7xl mx-auto flex flex-col justify-end space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-white text-black font-extrabold text-[10px] uppercase tracking-widest rounded-full">
              {displayCategory}
            </span>
            <span className="px-3 py-1 bg-white/90 text-neutral-950 font-bold text-[10px] uppercase tracking-widest rounded-full">
              {displayStatus}
            </span>
            <span className="text-xs text-neutral-300 font-medium">
              {isArabic && project.regionAr ? project.regionAr : project.region}
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
            {displayName}
          </h1>

          <p className="flex items-center gap-2 text-sm sm:text-lg text-neutral-200 font-light">
            <MapPin className="h-5 w-5 text-white shrink-0" />
            <span>{displayLocation}</span>
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-200 shadow-sm mb-12">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {isArabic ? 'مساحة الأرض الكلية' : 'Total Land Area'}
            </span>
            <span className="font-heading font-extrabold text-lg text-neutral-900">{displayLandArea}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {isArabic ? 'نسبة المباني والخضرة' : 'Built-up Footprint'}
            </span>
            <span className="font-heading font-extrabold text-lg text-neutral-900">{displayFootprint}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {isArabic ? 'أسعار تبدأ من' : 'Starting Price'}
            </span>
            <span className="font-heading font-extrabold text-lg text-amber-600">{displayStartingPrice}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {isArabic ? 'خطة السداد' : 'Payment Plan'}
            </span>
            <span className="font-heading font-bold text-sm text-neutral-900">{displayPaymentPlan}</span>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center space-x-6 border-b border-neutral-200 pb-4 mb-8 text-xs font-bold uppercase tracking-widest overflow-x-auto">
          {[
            { id: 'overview', label: isArabic ? 'نظرة عامة والمميزات' : 'Overview & Features' },
            { id: 'units', label: isArabic ? `أنواع الوحدات (${project.unitTypes.length})` : `Unit Types (${project.unitTypes.length})` },
            { id: 'masterplan', label: isArabic ? 'المخطط العام' : 'Master Plan' },
            { id: 'location', label: isArabic ? 'الموقع والخريطة' : 'Location & Map' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 whitespace-nowrap transition-colors relative ${
                activeTab === tab.id ? 'text-black font-extrabold' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            
            {/* About Project Comprehensive Section */}
            <div className="bg-neutral-50/80 rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm space-y-6">
              <div className="border-b border-neutral-200 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                    {isArabic ? 'دليل التفاصيل الكاملة' : 'Comprehensive Project Guide'}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mt-0.5">
                    {isArabic ? `عن مشروع ${displayName}` : `About ${displayName}`}
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-500 bg-white px-3 py-1.5 rounded-lg border border-neutral-200">
                  <Building className="h-4 w-4 text-amber-500" />
                  <span>{displayCategory}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-700 leading-relaxed">
                {/* 1. Project Overview & Concept */}
                <div className="p-5 bg-white rounded-xl border border-neutral-200/80 shadow-xs space-y-2">
                  <h4 className="font-heading font-bold text-base text-neutral-900 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    <span>{isArabic ? 'فلسفة ورؤية المشروع' : 'Overview & Vision'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {isArabic && project.aboutProjectAr?.overview
                      ? project.aboutProjectAr.overview
                      : project.aboutProject?.overview || displayDescription}
                  </p>
                </div>

                {/* 2. Strategic Location */}
                <div className="p-5 bg-white rounded-xl border border-neutral-200/80 shadow-xs space-y-2">
                  <h4 className="font-heading font-bold text-base text-neutral-900 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span>{isArabic ? 'الموقع الاستراتيجي والمحاور' : 'Strategic Location & Connectivity'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {isArabic && project.aboutProjectAr?.locationDetails
                      ? project.aboutProjectAr.locationDetails
                      : project.aboutProject?.locationDetails || `${isArabic ? 'يقع المشروع بموقع متميز في' : 'Located at'} ${displayLocation}. ${isArabic ? 'يتيح سهولة الوصول إلى أهم المحاور والطرق الرئيسية والمعالم الحيوية.' : 'Offers seamless access to major thoroughfares and city landmarks.'}`}
                  </p>
                </div>

                {/* 3. Master Plan & Life Architecture */}
                <div className="p-5 bg-white rounded-xl border border-neutral-200/80 shadow-xs space-y-2">
                  <h4 className="font-heading font-bold text-base text-neutral-900 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-amber-500" />
                    <span>{isArabic ? 'المخطط العام والخدمات' : 'Master Plan & Facilities'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {isArabic && project.aboutProjectAr?.masterPlanDetails
                      ? project.aboutProjectAr.masterPlanDetails
                      : project.aboutProject?.masterPlanDetails || `${isArabic ? 'يمتد المشروع على مساحة' : 'Spans across'} ${displayLandArea} ${isArabic ? 'مع تخصيص نسبة' : 'with'} ${displayFootprint} ${isArabic ? 'للمباني لضمان أقصى درجات الخصوصية والمساحات الخضراء والبحيرات المائية.' : 'built-up area prioritizing privacy and nature.'}`}
                  </p>
                </div>

                {/* 4. Unit Types & Spaces */}
                <div className="p-5 bg-white rounded-xl border border-neutral-200/80 shadow-xs space-y-2">
                  <h4 className="font-heading font-bold text-base text-neutral-900 flex items-center gap-2">
                    <Compass className="h-4 w-4 text-amber-500" />
                    <span>{isArabic ? 'أنواع الوحدات ونظم السداد' : 'Unit Types & Flexible Payment Terms'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {isArabic && project.aboutProjectAr?.unitTypesDetails
                      ? project.aboutProjectAr.unitTypesDetails
                      : project.aboutProject?.unitTypesDetails || `${isArabic ? 'تتنوع الوحدات لتشمل الخيارات السكنية والتجارية المتطورة بأسعار تبدأ من' : 'Offers diverse layouts starting from'} ${displayStartingPrice} ${isArabic ? 'وبنظام سداد ميسر:' : 'with payment plans:'} ${displayPaymentPlan}.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Features & Amenities (2 cols) */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-neutral-900 mb-4">
                    {isArabic ? 'المميزات الرئيسية والخدمات المتكاملة' : 'Key Features & Integrated Amenities'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(isArabic && project.highlightsAr ? project.highlightsAr : project.highlights).map((item, idx) => (
                      <div key={idx} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-neutral-800 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Private Consultation Box (1 col) */}
              <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    {isArabic ? 'مكتب المبيعات المباشر' : 'Direct Sales Desk'}
                  </span>
                  <h4 className="font-heading text-2xl font-extrabold uppercase mt-1">
                    {isArabic ? `هل تهتم بمشروع ${displayName}؟` : `Interested in ${displayName}?`}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                    {isArabic
                      ? 'قم بتحميل المخططات الرسمية، قائمة الأسعار، وحدد موعدًا لمعاينة الموقع مع أحد مستشاري إل كازار.'
                      : 'Download the official floor plans, price list, and schedule a private site walk-through with an IL CAZAR consultant.'}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-800">
                  <button
                    onClick={() => setIsBrochureOpen(true)}
                    className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors border border-neutral-700 flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4 text-white" />
                    <span>{isArabic ? 'عرض الكتالوج والتفاصيل' : 'View Brochure & Fact Sheet'}</span>
                  </button>
                  <button
                    onClick={onOpenEnquire}
                    className="w-full py-3.5 bg-white hover:bg-white text-neutral-950 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all shadow-lg"
                  >
                    {isArabic ? 'استفسر الآن' : 'Enquire Now'}
                  </button>
                </div>
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-neutral-900">
                  {isArabic ? 'معرض التصاميم والتفاصيل المعمارية' : 'Architecture & Rendering Gallery'}
                </h3>
                <span className="text-xs text-neutral-500 font-semibold">
                  {isArabic ? `${project.gallery.length} صور` : `${project.gallery.length} Images`}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedGalleryIndex(idx);
                      setIsGalleryOpen(true);
                    }}
                    className="group relative h-48 sm:h-56 rounded-xl overflow-hidden cursor-pointer bg-neutral-900 shadow-sm"
                  >
                    <SafeImage
                      src={img}
                      fallbackSrc={project.image}
                      alt={`Gallery ${idx + 1}`}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Maximize2 className="h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: UNIT TYPES */}
        {activeTab === 'units' && (
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-neutral-900">
                {isArabic ? `الوحدات المتاحة في ${displayName}` : `Available Unit Types in ${displayName}`}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {isArabic ? 'اختر تصميم الوحدة لعرض المواصفات والتقديم.' : 'Select a unit layout to view specifications and inquire.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.unitTypes.map((unit) => (
                <div key={unit.id} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="relative h-48 overflow-hidden bg-neutral-900">
                    <SafeImage
                      src={unit.image}
                      fallbackSrc={project.image}
                      alt={isArabic && unit.titleAr ? unit.titleAr : unit.title}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 text-white font-bold text-[10px] uppercase tracking-wider rounded z-10">
                      {unit.sizeRange}
                    </span>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-xl font-bold text-neutral-900">
                        {isArabic && unit.titleAr ? unit.titleAr : unit.title}
                      </h4>
                      {(unit.bedroomCountAr || unit.bedroomCount) && (
                        <p className="text-xs text-neutral-500 font-medium mt-0.5">
                          {isArabic && unit.bedroomCountAr ? unit.bedroomCountAr : unit.bedroomCount}
                        </p>
                      )}
                      
                      {(unit.startingPriceAr || unit.startingPrice) && (
                        <p className="text-sm font-extrabold text-amber-600 mt-2">
                          {isArabic && unit.startingPriceAr ? unit.startingPriceAr : unit.startingPrice}
                        </p>
                      )}

                      <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
                        {(isArabic && unit.featuresAr ? unit.featuresAr : unit.features).map((feat, fIdx) => (
                          <div key={fIdx} className="text-xs text-neutral-600 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={onOpenEnquire}
                      className="w-full py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors text-center mt-4"
                    >
                      {isArabic ? `استفسر عن ${unit.titleAr || unit.title}` : `Inquire About ${unit.title}`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: MASTER PLAN */}
        {activeTab === 'masterplan' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-neutral-900">
                {isArabic ? `المخطط العام لمشروع ${displayName}` : `${displayName} Master Plan`}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {isArabic
                  ? 'مخطط هادئ وعصري ذو كثافة بنائية منخفضة يخصص أكثر من 80% للمساحات الخضراء والمسطحات المائية.'
                  : 'Thoughtfully planned low-density layout prioritizing 80%+ open green parks and crystal water features.'}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900 text-white shadow-xl">
              <SafeImage
                src={project.masterPlanImage}
                fallbackSrc={project.image}
                alt={`${displayName} Master Plan`}
                containerClassName="w-full h-[500px]"
                className="w-full h-[500px] object-cover opacity-90"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase text-white">
                    {isArabic ? 'ملخص المخطط' : 'Masterplan Summary'}
                  </span>
                  <p className="text-xs text-white font-medium">{displayLandArea} | {displayFootprint}</p>
                </div>
                <button
                  onClick={onOpenEnquire}
                  className="px-6 py-2.5 bg-white hover:bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-lg"
                >
                  {isArabic ? 'طلب المخطط عالي الجودة' : 'Request HD Masterplan Vector'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: LOCATION & MAP */}
        {activeTab === 'location' && (
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-neutral-900">
                {isArabic ? 'الموقع وسهولة الوصول' : 'Location & Accessibility'}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">{displayLocation}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map (2 cols) */}
              <div className="lg:col-span-2">
                <ProjectMap
                  projects={[project]}
                  onSelectProject={() => {}}
                  height="450px"
                />
              </div>

              {/* Nearby Landmarks Timeline (1 col) */}
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-4">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
                  {isArabic ? 'المعالم القريبة وأوقات التنقل' : 'Nearby Destinations & Travel Time'}
                </h4>
                <div className="space-y-3">
                  {project.nearbyLandmarks.map((lm, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-neutral-200/80 flex items-center justify-between text-xs">
                      <span className="font-medium text-neutral-800">
                        {isArabic && lm.nameAr ? lm.nameAr : lm.name}
                      </span>
                      <span className="font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                        {isArabic && lm.distanceAr ? lm.distanceAr : lm.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <BrochureModal
        project={project}
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onOpenEnquire={onOpenEnquire}
        language={language}
      />

      <ImageGalleryModal
        images={project.gallery}
        initialIndex={selectedGalleryIndex}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        title={isArabic ? `معرض صور ${displayName}` : `${project.name} Photography`}
      />
    </div>
  );
};
