import React from 'react';
import { Logo } from './Logo';
import { Phone, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, projectId?: string) => void;
  onOpenEnquire: () => void;
  language?: 'EN' | 'AR';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquire, language = 'EN' }) => {
  const isArabic = language === 'AR';

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" className="h-10 w-10" />
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              {isArabic
                ? 'إل كازار للتطوير العقاري هي شركة مطورة رائدة في مصر تعيد تعريف أسلوب الحياة الفاخر من خلال مجتمعات سكنية فاخرة، منتجعات ساحلية، ومعالم تجارية وأيقونية في جميع أنحاء مصر.'
                : 'IL CAZAR Developments is a premier Egyptian real estate developer redefining luxury living with signature residential communities, master-planned coastal resorts, and iconic commercial landmarks across Egypt.'}
            </p>
            <div className="flex items-center space-x-4 text-neutral-400">
              <a href="#" className="h-9 w-9 rounded-full bg-neutral-900 hover:bg-white hover:text-black transition-all flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-neutral-900 hover:bg-white hover:text-black transition-all flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-neutral-900 hover:bg-white hover:text-black transition-all flex items-center justify-center">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-neutral-900 hover:bg-white hover:text-black transition-all flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Featured Projects Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              {isArabic ? 'أبرز المشاريع' : 'Flagship Projects'}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {[
                { id: 'vea', name: isArabic ? 'فيا' : 'VEA' },
                { id: 'creek-town', name: isArabic ? 'كريك تاون' : 'CREEK TOWN' },
                { id: 'safia', name: isArabic ? 'صافية' : 'SAFIA' },
                { id: 'the-crest', name: isArabic ? 'ذا كريست' : 'THE CREST' },
                { id: 'c-north', name: isArabic ? 'سي نورث' : 'C NORTH' },
                { id: 'stoda', name: isArabic ? 'ستودا' : 'STODA' }
              ].map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      onNavigate('project-detail', p.id);
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight className={`h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ${isArabic ? 'rotate-180' : ''}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              {isArabic ? 'التنقل السريع' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button onClick={() => { onNavigate('home'); window.scrollTo(0,0); }} className="hover:text-white">
                  {isArabic ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('about'); window.scrollTo(0,0); }} className="hover:text-white">
                  {isArabic ? 'عن إل كازار' : 'About IL CAZAR'}
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('projects'); window.scrollTo(0,0); }} className="hover:text-white">
                  {isArabic ? 'جميع المشاريع' : 'All Projects'}
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }} className="hover:text-white">
                  {isArabic ? 'تواصل معنا وفروع المبيعات' : 'Contact & Sales Centers'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              {isArabic ? 'تواصل معنا' : 'Get in Touch'}
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <a href="tel:16547" className="flex items-center gap-2.5 text-white font-bold text-sm hover:text-white">
                <Phone className="h-4 w-4 text-white shrink-0" />
                <span>{isArabic ? 'الخط الساخن' : 'Hotline'}: 16547 | 01012268500</span>
              </a>
            </div>

            <button
              onClick={onOpenEnquire}
              className="mt-2 w-full py-2.5 bg-white hover:bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center"
            >
              {isArabic ? 'طلب استشارة عقارية خاصة' : 'Private Advisory Request'}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {isArabic ? 'إل كازار للتطوير العقاري. جميع الحقوق محفوظة.' : 'IL CAZAR Developments. All Rights Reserved.'}</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-neutral-300">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-neutral-300">{isArabic ? 'شروط التملك' : 'Terms of Ownership'}</a>
            <a href="#" className="hover:text-neutral-300">{isArabic ? 'علاقات المستثمرين' : 'Investor Relations'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
