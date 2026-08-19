import React from 'react';
import { Project } from '../types';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface ProjectCardProps {
  project: Project;
  onSelect: (projectId: string) => void;
  index?: number;
  language?: 'EN' | 'AR';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, language = 'EN' }) => {
  const isArabic = language === 'AR';

  const categoryText = isArabic
    ? (project.categoryAr || (project.category === 'RESIDENTIAL' ? 'سكني' : 'تجاري / إداري'))
    : project.category;

  const statusText = isArabic
    ? (project.statusAr || (
        project.status === 'New Launch' ? 'إطلاق جديد' :
        project.status === 'Under Construction' ? 'قيد الإنشاء' :
        project.status === 'Delivered' ? 'تم التسليم' :
        project.status === 'Selling Fast' ? 'مبيعات متسارعة' :
        project.status === 'Ready To Move (RTM)' ? 'جاهز للانتقال' : project.status
      ))
    : project.status;

  const displayName = isArabic && project.nameAr ? project.nameAr : project.name;
  const displayLocation = isArabic && project.locationAr ? project.locationAr : project.location;
  const displayLandArea = isArabic && project.landAreaAr ? project.landAreaAr : project.landArea;
  const displayStartingPrice = isArabic && project.startingPriceAr ? project.startingPriceAr : project.startingPrice;

  return (
    <div
      onClick={() => onSelect(project.id)}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
    >
      {/* Background Image Container */}
      <div className="relative h-[340px] sm:h-[400px] md:h-[440px] w-full overflow-hidden">
        <SafeImage
          src={project.image}
          fallbackSrc={project.heroImage}
          alt={displayName}
          containerClassName="h-full w-full"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dynamic Gradient Overlays matching Il Cazar branding */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-md text-neutral-900 shadow-sm">
            {categoryText}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
            {statusText}
          </span>
        </div>

        {/* Bottom Content Overlay matching Screenshot 1 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end text-white">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 group-hover:text-amber-100 transition-colors">
                {displayName}
              </h3>
              <p className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-neutral-200/90 tracking-wide">
                <MapPin className="h-4 w-4 text-white/80 shrink-0" />
                <span>{displayLocation}</span>
              </p>
            </div>

            {/* Hover Action Arrow */}
            <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110 shrink-0">
              <ArrowUpRight className={`h-5 w-5 ${isArabic ? 'rotate-180' : ''}`} />
            </div>
          </div>

          {/* Expanded specs preview on hover */}
          <div className="grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-white/15 text-xs text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
            <div>
              <span className="block text-[10px] text-white/60 uppercase tracking-widest">
                {isArabic ? 'مساحة الأرض' : 'Land Area'}
              </span>
              <span className="font-semibold text-white">{displayLandArea}</span>
            </div>
            <div>
              <span className="block text-[10px] text-white/60 uppercase tracking-widest">
                {isArabic ? 'أسعار تبدأ من' : 'Starting Price'}
              </span>
              <span className="font-semibold text-white">{displayStartingPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
