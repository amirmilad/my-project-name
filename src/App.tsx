import React, { useState } from 'react';
import { PROJECTS_DATA, CONSTRUCTION_UPDATES, NEWS_ITEMS } from './data/projectsData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquireModal } from './components/EnquireModal';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ConstructionUpdatesPage } from './pages/ConstructionUpdatesPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('vea');
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  const handleNavigate = (page: string, projectId?: string) => {
    if (page === 'project-detail' && projectId) {
      setSelectedProjectId(projectId);
      setCurrentPage('project-detail');
    } else {
      setCurrentPage(page);
    }
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'AR' : 'EN');
  };

  const selectedProject = PROJECTS_DATA.find(p => p.id === selectedProjectId) || PROJECTS_DATA[0];

  React.useEffect(() => {
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'AR' ? 'ar' : 'en';
  }, [language]);

  return (
    <div
      dir={language === 'AR' ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col bg-white text-neutral-900 font-sans ${language === 'AR' ? 'rtl font-sans' : 'ltr'}`}
    >
      {/* Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquire={() => setIsEnquireModalOpen(true)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Page Renderer */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            projects={PROJECTS_DATA}
            onSelectProject={handleSelectProject}
            onNavigate={handleNavigate}
            onOpenEnquire={() => setIsEnquireModalOpen(true)}
            language={language}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            projects={PROJECTS_DATA}
            onSelectProject={handleSelectProject}
            language={language}
          />
        )}

        {currentPage === 'project-detail' && (
          <ProjectDetailPage
            project={selectedProject}
            allProjects={PROJECTS_DATA}
            onBack={() => handleNavigate('projects')}
            onSelectProject={handleSelectProject}
            onOpenEnquire={() => setIsEnquireModalOpen(true)}
            language={language}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenEnquire={() => setIsEnquireModalOpen(true)}
            language={language}
          />
        )}

        {currentPage === 'construction' && (
          <ConstructionUpdatesPage
            updates={CONSTRUCTION_UPDATES}
            projects={PROJECTS_DATA}
            onSelectProject={handleSelectProject}
            language={language}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage
            news={NEWS_ITEMS}
            onOpenEnquire={() => setIsEnquireModalOpen(true)}
            language={language}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            projects={PROJECTS_DATA}
            language={language}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquire={() => setIsEnquireModalOpen(true)}
        language={language}
      />

      {/* Global Enquire Advisory Modal */}
      <EnquireModal
        isOpen={isEnquireModalOpen}
        onClose={() => setIsEnquireModalOpen(false)}
        projects={PROJECTS_DATA}
        preselectedProjectId={selectedProjectId}
        language={language}
      />
    </div>
  );
}
