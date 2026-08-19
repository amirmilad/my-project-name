import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import {
  Menu,
  X,
  PhoneCall,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Building,
  Home,
  Info,
  Layers,
  HardHat,
  Newspaper,
  Mail,
  MapPin,
  Globe
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, projectId?: string) => void;
  onOpenEnquire: () => void;
  language: 'EN' | 'AR';
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquire,
  language,
  onToggleLanguage
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isArabic = language === 'AR';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navLinks = [
    { id: 'home', label: isArabic ? 'الرئيسية' : 'HOME', icon: Home },
    { id: 'about', label: isArabic ? 'عن الشركة' : 'ABOUT US', icon: Info },
    { id: 'projects', label: isArabic ? 'المشروعات' : 'PROJECTS', icon: Layers },
    { id: 'construction', label: isArabic ? 'مراحل البناء' : 'CONSTRUCTION', icon: HardHat },
    { id: 'news', label: isArabic ? 'الأخبار' : 'NEWS', icon: Newspaper },
    { id: 'contact', label: isArabic ? 'اتصل بنا' : 'CONTACT', icon: Mail }
  ];

  const flagshipProjects = [
    { id: 'the-crest', name: isArabic ? 'ذا كريست' : 'THE CREST', loc: isArabic ? 'التجمع السادس' : '6th Settlement', type: isArabic ? 'فيلات وشقق' : 'Villas & Apts' },
    { id: 'safia', name: isArabic ? 'صافية' : 'SAFIA', loc: isArabic ? 'رأس الحكمة' : 'Ras El Hekma', type: isArabic ? 'شاطئ ولاجونز' : 'Beach & Lagoons' },
    { id: 'vea', name: isArabic ? 'فيا' : 'VÉA', loc: isArabic ? 'التجمع السادس' : '6th Settlement', type: isArabic ? 'فيلات فاخرة' : 'Luxury Villas' },
    { id: 'c-north', name: isArabic ? 'سي نورث' : 'C NORTH', loc: isArabic ? 'رأس الحكمة' : 'Ras El Hekma', type: isArabic ? 'شاليهات وفيلات' : 'Chalets & Villas' },
    { id: 'creek-town', name: isArabic ? 'كريك تاون' : 'CREEK TOWN', loc: isArabic ? 'التجمع الأول' : 'First Settlement', type: isArabic ? 'مجتمع متكامل' : 'Master Community' },
    { id: 'go-heliopolis', name: isArabic ? 'جو هليوبوليس' : 'GO HELIOPOLIS', loc: isArabic ? 'مصر الجديدة' : 'Heliopolis', type: isArabic ? 'سكني وتجاري' : 'Mixed-Use' },
    { id: 'stoda', name: isArabic ? 'ستودا' : 'STODA', loc: isArabic ? 'شيراتون' : 'Sheraton', type: isArabic ? 'سكني وطبي' : 'Residential & Clinics' },
    { id: 'westdays', name: isArabic ? 'وستدايز' : 'WESTDAYS', loc: isArabic ? 'التجمع السادس' : '6th Settlement', type: isArabic ? 'شقق ومول' : 'Apts & Commercial' }
  ];

  const handleNavClick = (pageId: string, projectId?: string) => {
    setMenuOpen(false);
    onNavigate(pageId, projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-xl shadow-2xl py-2.5 sm:py-3 border-b border-white/10 text-white'
            : 'bg-neutral-950/70 backdrop-blur-md py-3.5 sm:py-4 border-b border-white/10 text-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <div
              className="cursor-pointer select-none shrink-0"
              onClick={() => handleNavClick('home')}
            >
              <Logo variant="light" className="h-8 w-8 sm:h-9 sm:w-9" />
            </div>

            {/* Desktop Direct Navigation Links (lg and above) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] xl:text-[12px] font-bold tracking-[0.15em]">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1.5 uppercase transition-colors hover:text-amber-300 cursor-pointer ${
                      isActive ? 'text-amber-400 font-extrabold' : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 shrink-0">
              
              {/* Language Switcher */}
              <button
                type="button"
                onClick={onToggleLanguage}
                className="text-[11px] sm:text-xs font-bold text-white hover:text-amber-300 transition-all px-2.5 py-1.5 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-md shadow-sm cursor-pointer"
                title={isArabic ? 'Switch to English' : 'التحويل إلى العربية'}
                aria-label="Toggle Language"
              >
                {language === 'EN' ? 'العربية' : 'EN'}
              </button>

              {/* Direct WhatsApp Quick Contact */}
              <a
                href="https://wa.me/201012268500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all shadow-md hover:scale-105"
                title="WhatsApp 01012268500"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white text-emerald-600" />
              </a>

              {/* Direct Hotline Pill (Desktop & Tablet) */}
              <a
                href="tel:16547"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/50 hover:bg-black/80 border border-amber-400/40 rounded-full text-xs font-bold text-amber-300 backdrop-blur-md transition-all shadow-sm"
                title={isArabic ? 'الخط الساخن 16547' : 'Hotline 16547'}
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-heading tracking-wider">16547</span>
              </a>

              {/* Request Consultation CTA */}
              <button
                type="button"
                onClick={onOpenEnquire}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-neutral-950" />
                <span>{isArabic ? 'طلب استشارة' : 'Enquire'}</span>
              </button>

              {/* Hamburger Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-105 shrink-0 cursor-pointer ${
                  menuOpen
                    ? 'bg-amber-400 text-neutral-950 ring-2 ring-amber-300'
                    : 'bg-white hover:bg-amber-400 text-neutral-950'
                }`}
                aria-label="Toggle Navigation Menu"
                title={isArabic ? 'القائمة الرئيسية' : 'Menu'}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Standalone Fullscreen Mega Navigation Drawer (Outside Header to avoid backdrop-filter trapping) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/98 backdrop-blur-3xl text-white flex flex-col overflow-hidden animate-in fade-in duration-200"
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          {/* Drawer Top Navigation Bar */}
          <div className="border-b border-white/10 bg-black/60 px-4 sm:px-8 py-3.5 flex items-center justify-between shrink-0">
            <div
              className="cursor-pointer select-none"
              onClick={() => handleNavClick('home')}
            >
              <Logo variant="light" className="h-8 w-8 sm:h-9 sm:w-9" />
            </div>

            <div className="flex items-center gap-3">
              {/* Language Switcher in Drawer */}
              <button
                type="button"
                onClick={onToggleLanguage}
                className="text-xs font-bold text-white px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 flex items-center gap-1.5 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'EN' ? 'العربية' : 'English'}</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center transition-all shadow-xl hover:scale-105 cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 font-bold" />
              </button>
            </div>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
              
              {/* Column 1: Main Navigation Pages */}
              <div className="md:col-span-4 space-y-3 sm:space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                  <Building className="h-3.5 w-3.5" />
                  <span>{isArabic ? 'الصفحات الرئيسية' : 'MAIN PAGES'}</span>
                </span>
                
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const IconComp = link.icon;
                    const isActive = currentPage === link.id;
                    return (
                      <button
                        key={link.id}
                        type="button"
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full py-3.5 px-4 rounded-xl font-heading text-base sm:text-lg font-black tracking-wide uppercase transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 shadow-xl'
                            : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className={`h-4 w-4 ${isActive ? 'text-neutral-950' : 'text-amber-400'}`} />
                          <span>{link.label}</span>
                        </div>
                        <ChevronRight className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''} ${isActive ? 'text-neutral-950' : 'text-neutral-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Flagship Developments Portfolio */}
              <div className="md:col-span-5 space-y-3 sm:space-y-4 border-t md:border-t-0 md:border-x border-neutral-800 pt-6 md:pt-0 md:px-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{isArabic ? 'أبرز المشروعات' : 'FLAGSHIP PROJECTS'}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNavClick('projects')}
                    className="text-xs font-bold text-amber-300 hover:underline cursor-pointer"
                  >
                    {isArabic ? 'عرض كافة المشروعات' : 'View All Projects'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {flagshipProjects.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleNavClick('project-detail', p.id)}
                      className="p-3.5 bg-neutral-900/80 hover:bg-neutral-800 rounded-xl border border-neutral-800 hover:border-amber-400/40 transition-all text-start group flex items-center justify-between cursor-pointer"
                    >
                      <div className="space-y-1 min-w-0 pr-2">
                        <h4 className="font-heading font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors truncate">
                          {p.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                          <MapPin className="h-3 w-3 text-amber-400 shrink-0" />
                          <span className="truncate">{p.loc}</span>
                        </div>
                      </div>
                      <ChevronRight className={`h-4 w-4 text-neutral-500 group-hover:text-amber-300 transition-colors shrink-0 ${isArabic ? 'rotate-180' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Column 3: Direct VIP Contact & Consultation */}
              <div className="md:col-span-3 space-y-4 border-t md:border-t-0 border-neutral-800 pt-6 md:pt-0 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>{isArabic ? 'التواصل المباشر' : 'DIRECT CONTACT'}</span>
                  </span>

                  {/* Hotline Dial */}
                  <a
                    href="tel:16547"
                    className="flex items-center gap-3 p-3.5 bg-neutral-900/90 rounded-xl border border-amber-400/40 text-white hover:border-amber-400 transition-colors shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-400 uppercase font-semibold">
                        {isArabic ? 'الخط الساخن الرسمي' : 'OFFICIAL HOTLINE'}
                      </span>
                      <strong className="font-heading text-lg font-black text-amber-300">16547</strong>
                    </div>
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/201012268500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-emerald-950/70 rounded-xl border border-emerald-600/50 text-white hover:bg-emerald-900/80 transition-colors shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 fill-emerald-400 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-emerald-300 uppercase font-semibold">
                        {isArabic ? 'محادثة واتساب فورية' : 'INSTANT WHATSAPP'}
                      </span>
                      <strong className="font-mono text-sm font-bold text-white">01012268500</strong>
                    </div>
                  </a>
                </div>

                {/* Consultation Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenEnquire();
                    }}
                    className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-2xl text-center cursor-pointer"
                  >
                    {isArabic ? 'طلب استشارة خاصة ومخطط' : 'REQUEST PRIVATE CONSULTATION'}
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
