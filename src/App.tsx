import React, { useState, useEffect } from 'react';
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
  const [selectedProjectId, setSelectedProjectId] = useState<string>('the-crest');
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<'EN' | 'AR'>('AR');

  const selectedProject = PROJECTS_DATA.find(p => p.id === selectedProjectId) || PROJECTS_DATA[0];

  const handleNavigate = (page: string, projectId?: string) => {
    if (page === 'project-detail' && projectId) {
      setSelectedProjectId(projectId);
      setCurrentPage('project-detail');
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'AR' : 'EN');
  };

  // Dynamic SEO Title & Meta Description Manager
  useEffect(() => {
    const isArabic = language === 'AR';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';

    let pageTitle = '';
    let pageDescription = '';

    switch (currentPage) {
      case 'home':
        pageTitle = isArabic
          ? 'IL CAZAR Developments | إل كازار للتطوير العقاري | مشاريع فاخرة في القاهرة والساحل'
          : 'IL CAZAR Developments | Premier Luxury Real Estate Egypt';
        pageDescription = isArabic
          ? 'اكتشف مشاريع إل كازار العقارية الفاخرة: ذا كريست، صافية رأس الحكمة، كريك تاون، فيا، وسي نورث. خطط سداد تصل إلى 10 سنوات.'
          : 'Discover IL CAZAR Developments luxury portfolio: The Crest, Safia Ras El Hekma, Creek Town, VEA, and C North. Up to 10-year flexible payment terms.';
        break;
      case 'projects':
        pageTitle = isArabic
          ? 'المشاريع والكمبوندات | إل كازار للتطوير العقاري'
          : 'Flagship Projects Portfolio | IL CAZAR Developments';
        pageDescription = isArabic
          ? 'تصفح كافة مشروعات شركة إل كازار للتطوير العقاري في القاهرة الجديدة ورأس الحكمة والعلمين الجديدة.'
          : 'Explore all luxury master communities by IL CAZAR in New Cairo, Ras El Hekma and New Alamein.';
        break;
      case 'project-detail':
        const projectName = isArabic ? (selectedProject?.nameAr || selectedProject?.name) : selectedProject?.name;
        const projectLoc = isArabic ? (selectedProject?.locationAr || selectedProject?.location) : selectedProject?.location;
        pageTitle = `${projectName} (${projectLoc}) | IL CAZAR Developments`;
        pageDescription = isArabic
          ? (selectedProject?.shortDescriptionAr || selectedProject?.descriptionAr || '')
          : (selectedProject?.shortDescription || selectedProject?.description || '');
        break;
      case 'about':
        pageTitle = isArabic
          ? 'عن الشركة وقصتنا | إل كازار للتطوير العقاري'
          : 'About Us & Our Story | IL CAZAR Developments';
        pageDescription = isArabic
          ? 'تعرف على رؤية وقيم وتاريخ شركة إل كازار للتطوير العقاري ومحفظة أراضيها الاستراتيجية في مصر.'
          : 'Learn about IL CAZAR Developments history, values, and grade A luxury real estate vision in Egypt.';
        break;
      case 'construction':
        pageTitle = isArabic
          ? 'تطورات الإنشاءات ومراحل البناء | إل كازار'
          : 'Live Construction Updates | IL CAZAR Developments';
        pageDescription = isArabic
          ? 'تابع أحدث نسب الإنجاز ومراحل البناء والتسليم لكافة مشروعات إل كازار في القاهرة والساحل.'
          : 'Track milestone progress and delivery timelines across all IL CAZAR residential and commercial developments.';
        break;
      case 'news':
        pageTitle = isArabic
          ? 'المركز الإعلامي وأخبار الشركة | إل كازار'
          : 'News & Announcements | IL CAZAR Developments';
        pageDescription = isArabic
          ? 'أحدث البيانات الصحفية والشراكات الاستثمارية وإطلاقات المشاريع الجديدة لشركة إل كازار.'
          : 'Latest corporate press releases, investment milestones, and project launch news from IL CAZAR.';
        break;
      case 'contact':
        pageTitle = isArabic
          ? 'تواصل معنا والخط الساخن 16547 | إل كازار'
          : 'Contact Us & Hotline 16547 | IL CAZAR Developments';
        pageDescription = isArabic
          ? 'تواصل مباشرة مع مستشاري عقارات إل كازار عبر الخط الساخن 16547 أو واتساب 01012268500.'
          : 'Connect with IL CAZAR property consultants via hotline 16547 or WhatsApp at 01012268500.';
        break;
      default:
        pageTitle = 'IL CAZAR Developments | إل كازار للتطوير العقاري';
        pageDescription = 'Egypt premier luxury real estate developer.';
    }

    document.title = pageTitle;

    // Update meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescription);
    }
    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }
    // Update og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', pageDescription);
    }
  }, [currentPage, selectedProjectId, language, selectedProject]);

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

      {/* Main Page Content */}
      <main className="flex-1" id="main-content">
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
