import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectMap } from '../components/ProjectMap';
import { Filter, Map, Grid, Search } from 'lucide-react';

interface ProjectsPageProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  language: 'EN' | 'AR';
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  onSelectProject,
  language
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [activeRegion, setActiveRegion] = useState<'ALL' | 'Cairo' | 'North Coast'>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const isArabic = language === 'AR';

  // Filter projects based on Category, Region, and Search Query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'ALL' || project.category === activeCategory;
    const matchesRegion = activeRegion === 'ALL' || project.region === activeRegion;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Title */}
        <div className="text-center pt-4">
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-neutral-900">
            {isArabic ? 'مشاريع إل كازار' : 'Projects'}
          </h1>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-200 pb-6">
          
          {/* ALL | RESIDENTIAL | COMMERCIAL Category Tabs */}
          <div className="flex items-center space-x-6 sm:space-x-8 text-sm sm:text-base font-bold uppercase tracking-widest text-neutral-800">
            {(['ALL', 'RESIDENTIAL', 'COMMERCIAL'] as ProjectCategory[]).map((cat) => {
              const isSelected = activeCategory === cat;
              const label = isArabic
                ? (cat === 'ALL' ? 'الكل' : cat === 'RESIDENTIAL' ? 'سكني' : 'تجاري')
                : cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative py-2 transition-colors ${
                    isSelected ? 'text-black font-extrabold' : 'text-neutral-400 hover:text-black'
                  }`}
                >
                  <span>{label}</span>
                  {isSelected && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Region Sub-Filters & Grid/Map View Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Region Selector */}
            <div className="flex items-center bg-neutral-100 p-1 rounded-full text-xs font-semibold">
              <button
                onClick={() => setActiveRegion('ALL')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  activeRegion === 'ALL' ? 'bg-white shadow text-black font-bold' : 'text-neutral-600'
                }`}
              >
                {isArabic ? 'جميع المناطق' : 'All Regions'}
              </button>
              <button
                onClick={() => setActiveRegion('Cairo')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  activeRegion === 'Cairo' ? 'bg-white shadow text-black font-bold' : 'text-neutral-600'
                }`}
              >
                {isArabic ? 'القاهرة' : 'Cairo'}
              </button>
              <button
                onClick={() => setActiveRegion('North Coast')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  activeRegion === 'North Coast' ? 'bg-white shadow text-black font-bold' : 'text-neutral-600'
                }`}
              >
                {isArabic ? 'الساحل الشمالي' : 'North Coast'}
              </button>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-neutral-100 p-1 rounded-full border border-neutral-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'grid' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                }`}
                title={isArabic ? 'عرض الشكبة' : 'Grid View'}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-1.5 rounded-full transition-all ${
                  viewMode === 'map' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                }`}
                title={isArabic ? 'عرض الخريطة' : 'Interactive Map View'}
              >
                <Map className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* View Mode Content */}
        {viewMode === 'map' ? (
          <div className="space-y-4">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
              {isArabic ? `عرض موقع ${filteredProjects.length} مشروع` : `Showing ${filteredProjects.length} Project Locations`}
            </p>
            <ProjectMap
              projects={filteredProjects}
              onSelectProject={onSelectProject}
              height="600px"
            />
          </div>
        ) : (
          <div>
            {filteredProjects.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <p className="text-lg font-bold text-neutral-700">
                  {isArabic ? 'لا توجد مشاريع تطابق خيارات التصفية المختارة.' : 'No projects match the selected filters.'}
                </p>
                <button
                  onClick={() => { setActiveCategory('ALL'); setActiveRegion('ALL'); setSearchQuery(''); }}
                  className="px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase rounded-lg"
                >
                  {isArabic ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={onSelectProject}
                    index={idx}
                    language={language}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
