import React from 'react';
import { NewsItem } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface NewsPageProps {
  news: NewsItem[];
  onOpenEnquire: () => void;
  language?: 'EN' | 'AR';
}

export const NewsPage: React.FC<NewsPageProps> = ({ news, onOpenEnquire, language = 'EN' }) => {
  const isArabic = language === 'AR';

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            {isArabic ? 'المركز الإعلامي' : 'Media Center'}
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900">
            {isArabic ? 'الأخبار والإعلانات' : 'News & Announcements'}
          </h1>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            {isArabic
              ? 'تابع أحدث البيانات الصحفية، الشراكات الاستراتيجية، إطلاقات المشاريع الجديدة، وأخبار شركة إل كازار للتطوير العقاري.'
              : 'Stay informed on corporate releases, strategic partnerships, new project launches, and market insights from IL CAZAR Developments.'}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="relative h-52 overflow-hidden bg-neutral-900">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 text-white font-bold text-[10px] uppercase tracking-wider rounded z-10">
                  {isArabic && item.categoryAr ? item.categoryAr : item.category}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {item.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {item.readTime}</span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-neutral-900 leading-snug line-clamp-2">
                    {isArabic && item.titleAr ? item.titleAr : item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {isArabic && item.summaryAr ? item.summaryAr : item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <button
                    onClick={onOpenEnquire}
                    className="text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-white flex items-center gap-1"
                  >
                    <span>{isArabic ? 'قراءة البيان الصحفي' : 'Read Press Release'}</span>
                    <ArrowRight className={`h-3.5 w-3.5 ${isArabic ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
