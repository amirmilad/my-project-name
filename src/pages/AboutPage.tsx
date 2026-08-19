import React from 'react';
import { ShieldCheck, Award, Building2, Users, Compass, Globe } from 'lucide-react';

interface AboutPageProps {
  onOpenEnquire: () => void;
  language: 'EN' | 'AR';
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquire, language }) => {
  const isArabic = language === 'AR';

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-white">
          {isArabic ? 'نظرة عامة على الشركة' : 'Company Overview'}
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900">
          {isArabic ? 'عن إل كازار' : 'About IL CAZAR'}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
          {isArabic
            ? 'مستوحاة من عظَمَة القيصر، تقف إل كازار للتطوير العقاري كرمز للطموح المعماري الجريء، الهندسة الدقيقة، والمجتمعات السكنية الخالدة في مصر.'
            : 'Inspired by the majesty of Caesar, IL CAZAR Developments stands as an emblem of bold architectural ambition, precision engineering, and timeless residential communities in Egypt.'}
        </p>
      </section>

      {/* Our Story Section matching requested text */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50/80 border border-neutral-200/80 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {isArabic ? 'قصتنا (Our Story)' : 'Our Story'}
          </h2>
          <div className="space-y-5 text-neutral-700 text-base sm:text-lg font-normal leading-relaxed">
            <p className="font-medium text-neutral-900">
              {isArabic
                ? 'تعكس إل كازار قفزة أكثر جرأة في إطلاق مشاريع جديدة بعد كريك تاون وجو هليوبوليس، مع التعهد بمشاريع فاخرة تحمل علامتها التجارية بمعايير تميز عالمية في كل تفصيلة.'
                : 'IL Cazar reflecting a bolder leap into launching new projects after Creek Town and Go Heliopolis, promising branded projects with international standard of excellence in every detail.'}
            </p>
            <p className="text-neutral-600">
              {isArabic
                ? 'تهدف إل كازار إلى إحداث تأثير إيجابي على المجتمع من خلال المساهمة في صناعة العقارات في مصر، والعمل دائماً على تطوير ورفع معايير السوق بتقديم مشاريع تطويرية ذات جودة عالية من الفئة A.'
                : 'IL Cazar’s aim is to positively impact the community by contributing to the real estate industry in Egypt and always working on enhancing the standards in the market by providing grade A quality development projects.'}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-4">
            <div className="p-3 bg-neutral-900 text-white rounded-xl w-fit">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase text-neutral-900">
              {isArabic ? 'الابتكار المعماري' : 'Architectural Innovation'}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {isArabic
                ? 'نتعاون حصرًا مع أشهر المخططين والمعماريين عالميًا مثل YBA ورائف فهمي لبناء مجتمعات فاخرة ذات كثافة بنائية منخفضة ومساحات خضراء تتجاوز 80%.'
                : 'We partner exclusively with internationally renowned master planners including YBA and Raef Fahmi to craft iconic low-density communities with 80%+ landscape coverage.'}
            </p>
          </div>

          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-4">
            <div className="p-3 bg-neutral-900 text-white rounded-xl w-fit">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase text-neutral-900">
              {isArabic ? 'الالتزام بالتسليم' : 'Delivery Excellence'}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {isArabic
                ? 'يقوم تاريخنا على التنفيذ في الوقت المحدد، وشفافية مراحل البناء، والمعايير الهندسية الصارمة عبر مشاريعنا في القاهرة والساحل الشمالي.'
                : 'Our track record stands firmly on timely execution, transparent construction milestones, and strict structural quality standards across Cairo and the North Coast.'}
            </p>
          </div>

          <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-4">
            <div className="p-3 bg-neutral-900 text-white rounded-xl w-fit">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase text-neutral-900">
              {isArabic ? 'مواقع استراتيجية' : 'Prime Locations'}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {isArabic
                ? 'من التجمع السادس بالقاهرة الجديدة إلى رأس الحكمة والعلمين الجديدة، تقع مشاريعنا في محاور استراتيجية تضمن أقصى عائد استثماري.'
                : 'From 6th Settlement New Cairo to Ras El Hekma and New Alamein, our developments occupy prime arterial corridors with maximum value appreciation for investors.'}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-950 text-white py-16 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">8+</span>
            <span className="block text-xs uppercase tracking-widest text-neutral-400 mt-2">
              {isArabic ? 'مشاريع رائعة' : 'Flagship Developments'}
            </span>
          </div>
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">800+</span>
            <span className="block text-xs uppercase tracking-widest text-neutral-400 mt-2">
              {isArabic ? 'فدان محفظة أراضي' : 'Feddans Land Bank'}
            </span>
          </div>
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">100%</span>
            <span className="block text-xs uppercase tracking-widest text-neutral-400 mt-2">
              {isArabic ? 'التزام بالمواعيد' : 'On-Schedule Milestone Ratio'}
            </span>
          </div>
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">16547</span>
            <span className="block text-xs uppercase tracking-widest text-neutral-400 mt-2">
              {isArabic ? 'الخط الساخن المباشر' : 'Dedicated Hotline'}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
