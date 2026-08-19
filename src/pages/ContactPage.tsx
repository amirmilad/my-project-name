import React, { useState } from 'react';
import { Clock, Send, Check } from 'lucide-react';
import { ProjectMap } from '../components/ProjectMap';
import { Project } from '../types';

interface ContactPageProps {
  projects: Project[];
  language?: 'EN' | 'AR';
}

export const ContactPage: React.FC<ContactPageProps> = ({ projects, language = 'EN' }) => {
  const isArabic = language === 'AR';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            {isArabic ? 'تواصل مع إل كازار' : 'Connect With IL CAZAR'}
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900">
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            {isArabic
              ? 'مستشارونا العقاريون متواجدون دائمًا للإجابة على جميع استفساراتكم المتعلقة بالوحدات السكنية، خطط السداد، وتنظيم الزيارات الميدانية.'
              : 'Our private real estate advisors are available 24/7 to answer inquiries regarding residential units, payment plans, and site visits.'}
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div className="p-8 bg-neutral-950 text-white rounded-3xl space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  {isArabic ? 'خدمة الخط الساخن' : 'Hotline Services'}
                </span>
                <a href="tel:16547" className="block font-heading text-4xl sm:text-5xl font-black text-white hover:text-white transition-colors mt-1">
                  16547
                </a>
                <span className="text-xs font-semibold text-slate-300 block mt-1">
                  {isArabic ? 'المباشر / واتساب: 01012268500' : 'Direct / WhatsApp: 01012268500'}
                </span>
              </div>

              <div className="space-y-4 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-white shrink-0" />
                  <div>
                    <strong className="block text-white text-sm">
                      {isArabic ? 'مواعيد العمل' : 'Sales Hours'}
                    </strong>
                    <p>
                      {isArabic ? 'الأحد – الخميس: 9:00 صباحًا – 5:00 مساءً' : 'Sunday – Thursday: 9:00 AM – 5:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Centers List */}
            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-neutral-900">
                {isArabic ? 'فروع ومراكز مبيعات إل كازار' : 'IL CAZAR Sales Centers'}
              </h4>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="font-semibold text-neutral-900">
                    {isArabic ? 'المقر الرئيسي بالتجمع' : 'New Cairo Headquarters'}
                  </span>
                  <span>{isArabic ? 'مدخل طريق السويس' : 'Suez Road Entrance'}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-neutral-200/60">
                  <span className="font-semibold text-neutral-900">
                    {isArabic ? 'صالة مبيعات كريك تاون' : 'Creek Town Sales Lounge'}
                  </span>
                  <span>{isArabic ? 'التجمع الأول' : 'First Settlement'}</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-semibold text-neutral-900">
                    {isArabic ? 'مركز مبيعات الساحل الشمالي' : 'North Coast Sales Hub'}
                  </span>
                  <span>{isArabic ? 'الكيلو 180 رأس الحكمة' : 'KM 180 Ras El Hekma'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-neutral-900">
                  {isArabic ? 'تم إرسال الرسالة بنجاح' : 'Message Sent'}
                </h3>
                <p className="text-xs text-neutral-600">
                  {isArabic
                    ? 'شكرًا لتواصلكم مع شركة إل كازار للتطوير العقاري. سيتواصل معكم أحد مستشارينا في أقرب وقت.'
                    : 'Thank you for reaching out to IL CAZAR. An advisor will contact you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl font-bold uppercase text-neutral-900">
                  {isArabic ? 'أرسل لنا رسالة أو استفسار' : 'Send us a Message'}
                </h3>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    {isArabic ? 'الاسم بالكامل *' : 'Full Name *'}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={isArabic ? 'مثال: أحمد منصور' : 'e.g. Ahmed Mansour'}
                    className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      {isArabic ? 'رقم الهاتف *' : 'Phone Number *'}
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder={isArabic ? '01012268500' : '+20 100 000 0000'}
                      className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      {isArabic ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    {isArabic ? 'تفاصيل الاستفسار أو الرسالة' : 'Message'}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={isArabic ? 'اكتب استفسارك هنا...' : 'Your inquiry...'}
                    className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{isArabic ? 'إرسال الاستفسار' : 'Send Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-neutral-900">
            {isArabic ? 'خريطة مواقع وفروع مشاريع إل كازار' : 'Interactive Locations Map'}
          </h3>
          <ProjectMap projects={projects} onSelectProject={() => {}} height="400px" />
        </div>
      </div>
    </div>
  );
};
