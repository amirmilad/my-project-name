import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall, ChevronRight, Search, MessageCircle, HelpCircle } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: isArabic ? 'الرئيسية' : 'HOME' },
    { id: 'about', label: isArabic ? 'عن الشركة' : 'ABOUT US' },
    { id: 'projects', label: isArabic ? 'المشاريع' : 'PROJECTS' },
    { id: 'contact', label: isArabic ? 'تواصل معنا' : 'CONTACT US' },
  ];

  const quickProjects = [
    { id: 'vea', name: isArabic ? 'فيا' : 'VÉA', loc: isArabic ? 'القاهرة الجديدة' : 'New Cairo' },
    { id: 'safia', name: isArabic ? 'صافية' : 'SAFIA', loc: isArabic ? 'رأس الحكمة' : 'Ras El Hekma' },
    { id: 'creek-town', name: isArabic ? 'كريك تاون' : 'CREEK TOWN', loc: isArabic ? 'التجمع الأول' : 'First Settlement' },
    { id: 'the-crest', name: isArabic ? 'ذا كريست' : 'THE CREST', loc: isArabic ? 'القاهرة الجديدة' : 'New Cairo' },
    { id: 'c-north', name: isArabic ? 'سي نورث' : 'C NORTH', loc: isArabic ? 'رأس الحكمة' : 'Ras El Hekma' },
    { id: 'go-heliopolis', name: isArabic ? 'جو هليوبوليس' : 'GO HELIOPOLIS', loc: isArabic ? 'مصر الجديدة' : 'Heliopolis' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-xl shadow-xl py-3 border-b border-white/15 text-white'
          : 'bg-slate-900/40 backdrop-blur-md py-4 border-b border-white/15 text-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}>
            <Logo variant="light" className="h-9 w-9 sm:h-10 sm:w-10" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[12px] font-bold tracking-[0.15em]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative py-1 uppercase transition-colors hover:text-white ${
                    isActive ? 'text-white font-extrabold' : 'text-slate-100/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-sm" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Hamburger Button (Visible on ALL devices) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="text-xs font-bold text-white hover:text-amber-300 transition-colors px-2 py-1 bg-white/10 hover:bg-white/20 rounded-full border border-white/20"
            >
              {language === 'EN' ? 'عربي' : 'English'}
            </button>

            {/* WhatsApp Icon Button */}
            <a
              href="https://wa.me/201012268500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all shadow-md hover:scale-105"
              title="WhatsApp 01012268500"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            </a>

            {/* Hotline Button (Hidden on tiny screens) */}
            <a
              href="tel:16547"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-white/15 hover:bg-white/25 border border-white/30 rounded-full text-xs font-bold text-white backdrop-blur-md transition-all shadow-sm"
              title="Hotline 16547"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>16547 {isArabic ? 'الخط الساخن' : 'Hotline'}</span>
            </a>

            {/* Need Help Button */}
            <button
              onClick={onOpenEnquire}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all shadow-md"
            >
              <HelpCircle className="w-4 h-4 text-neutral-950" />
              <span>{isArabic ? 'مساعدة' : 'Need Help'}</span>
            </button>

            {/* Hamburger 3-Bar Circle Button (Visible on ALL devices: mobile & desktop) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-lg hover:bg-amber-400 transition-all transform hover:scale-105 shrink-0"
              aria-label="Toggle Navigation Menu"
              title={isArabic ? 'القائمة الرئيسية' : 'Toggle Menu'}
            >
              {menuOpen ? <X className="w-5 h-5 text-neutral-950" /> : <Menu className="w-5 h-5 text-neutral-950" />}
            </button>
          </div>
        </div>
      </div>

      {/* Universal Drawer / Overlay Menu for ALL Devices (Mobile, Tablet & Desktop) */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[65px] sm:top-[73px] bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-800 text-white shadow-2xl z-50 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Main Navigation Links */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                {isArabic ? 'التنقل الرئيسي' : 'MAIN NAVIGATION'}
              </span>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`py-2.5 px-4 rounded-xl text-left font-heading text-lg sm:text-2xl font-black tracking-wider uppercase transition-all flex items-center justify-between ${
                      currentPage === link.id
                        ? 'bg-white text-neutral-950 shadow-md'
                        : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`h-5 w-5 ${isArabic ? 'rotate-180' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links to Flagship Projects */}
            <div className="md:col-span-4 space-y-4 border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                {isArabic ? 'أبرز المشاريع' : 'FLAGSHIP PROJECTS'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
                {quickProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onNavigate('project-detail', p.id);
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3 bg-neutral-900/80 hover:bg-neutral-800 rounded-xl border border-neutral-800 transition-all text-left group flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-light">{p.loc}</p>
                    </div>
                    <ChevronRight className={`h-4 w-4 text-neutral-500 group-hover:text-amber-300 transition-colors ${isArabic ? 'rotate-180' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Contact & Consultation Column */}
            <div className="md:col-span-3 space-y-4 border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  {isArabic ? 'التواصل المباشر' : 'DIRECT CONTACT'}
                </span>
                <a
                  href="tel:16547"
                  className="flex items-center gap-3 p-3 bg-neutral-900 rounded-xl border border-neutral-800 text-white hover:border-amber-400/50 transition-colors"
                >
                  <PhoneCall className="h-5 w-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-neutral-400 uppercase font-semibold">
                      {isArabic ? 'الخط الساخن' : 'HOTLINE'}
                    </span>
                    <strong className="font-heading text-lg font-black text-amber-300">16547</strong>
                  </div>
                </a>

                <a
                  href="https://wa.me/201012268500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-emerald-950/60 rounded-xl border border-emerald-800/60 text-white hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-400 fill-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-emerald-300 uppercase font-semibold">
                      {isArabic ? 'خدمة الواتساب' : 'WHATSAPP DIRECT'}
                    </span>
                    <strong className="font-mono text-sm font-bold">01012268500</strong>
                  </div>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenEnquire();
                  }}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg text-center"
                >
                  {isArabic ? 'طلب استشارة خاصة' : 'REQUEST PRIVATE CONSULTATION'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
