import React, { useState } from 'react';
import { ConstructionUpdate, Project } from '../types';
import { Calendar, CheckCircle, ChevronRight, HardHat, Camera, Images } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface ConstructionUpdatesPageProps {
  updates: ConstructionUpdate[];
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  language?: 'EN' | 'AR';
}

export const ConstructionUpdatesPage: React.FC<ConstructionUpdatesPageProps> = ({
  updates,
  projects,
  onSelectProject,
  language = 'EN'
}) => {
  const isArabic = language === 'AR';
  const [selectedProjectId, setSelectedProjectId] = useState<string>('ALL');

  const filteredUpdates = selectedProjectId === 'ALL'
    ? updates
    : updates.filter(u => u.projectId === selectedProjectId);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            {isArabic ? 'تطورات الأعمال والإنشاءات' : 'On-Site Progress'}
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900">
            {isArabic ? 'تحديثات الإنشاءات' : 'Construction Updates'}
          </h1>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            {isArabic
              ? 'متابعة حية ودورية للتقدم الإنشائي، ونسب الإنجاز، والصور الميدانية لمشاريع شركة إل كازار.'
              : 'Track real-time engineering milestones, structural progress, and site photography across all IL CAZAR developments.'}
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedProjectId('ALL')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedProjectId === 'ALL' ? 'bg-neutral-900 text-white shadow-md' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {isArabic ? 'جميع المشاريع' : 'All Projects'}
          </button>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProjectId(p.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedProjectId === p.id ? 'bg-neutral-900 text-white shadow-md' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Updates List */}
        <div className="space-y-10">
          {filteredUpdates.map((update) => {
            const displayTitle = isArabic && update.titleAr ? update.titleAr : update.title;
            const displaySummary = isArabic && update.summaryAr ? update.summaryAr : update.summary;
            const displayProjectName = isArabic && update.projectNameAr ? update.projectNameAr : update.projectName;
            const displayDetails = isArabic && update.detailsAr ? update.detailsAr : update.details;

            return (
              <div key={update.id} className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-0">
                
                {/* Cover Image (1 col) */}
                <div className="relative h-64 lg:h-auto bg-neutral-900">
                  <SafeImage
                    src={update.coverImage}
                    alt={displayTitle}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider rounded-md z-10">
                    {update.quarter}
                  </span>
                </div>

                {/* Progress Details (2 cols) */}
                <div className="lg:col-span-2 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                        {displayProjectName}
                      </span>
                      <span className="text-xs text-neutral-400 font-semibold flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {update.date}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-neutral-900">{displayTitle}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{displaySummary}</p>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-neutral-700 uppercase tracking-wider">
                          {isArabic ? 'نسبة الإنجاز الإنشائي' : 'Completion Status'}
                        </span>
                        <span className="text-amber-600">{update.completionPercentage}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-neutral-900 to-neutral-200 rounded-full transition-all duration-1000"
                          style={{ width: `${update.completionPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Detailed Log Bullet points */}
                    <div className="pt-2 space-y-2">
                      {displayDetails.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`pt-4 border-t border-neutral-100 flex ${isArabic ? 'justify-start' : 'justify-end'}`}>
                    <button
                      onClick={() => onSelectProject(update.projectId)}
                      className="px-5 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                    >
                      <span>{isArabic ? 'عرض المخطط العام للمشروع' : 'View Project Masterplan'}</span>
                      <ChevronRight className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
