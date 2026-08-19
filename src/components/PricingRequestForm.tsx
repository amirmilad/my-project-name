import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, PhoneCall, MessageCircle } from 'lucide-react';
import { Project } from '../types';

interface PricingRequestFormProps {
  projects?: Project[];
  className?: string;
  language?: 'EN' | 'AR';
  onSuccessSubmit?: () => void;
}

export const PricingRequestForm: React.FC<PricingRequestFormProps> = ({
  projects = [],
  className = '',
  language = 'EN',
  onSuccessSubmit
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedUnitType, setSelectedUnitType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobileNumber.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit();
      }
    }, 800);
  };

  const isArabic = language === 'AR';

  return (
    <div className="w-full max-w-md space-y-3 sm:space-y-4">
      {/* Form Card */}
      <div
        className={`w-full bg-[#0a111e]/55 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-2xl transition-all ${className}`}
      >
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mb-2 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {isArabic ? 'تم استلام طلبك بنجاح' : 'Request Received'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
              {isArabic
                ? 'شكرًا لتواصلك معنا. سيقوم أحد مستشاري عقارات إل كازار بالتواصل معك فورًا وإرسال قائمة الأسعار والتفاصيل.'
                : 'Thank you! An IL CAZAR luxury property advisor will contact you shortly with complete pricing details.'}
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFullName('');
                setMobileNumber('');
                setSelectedUnitType('');
              }}
              className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold uppercase tracking-wider text-slate-200 rounded-lg transition-colors border border-slate-600"
            >
              {isArabic ? 'إرسال طلب آخر' : 'Submit Another Request'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header */}
            <div className="text-center space-y-1">
              <span className="block text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold">
                {isArabic ? 'سجل رسمي آمن' : 'SECURE REGISTRY'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-wide leading-snug">
                {isArabic ? 'طلب تفاصيل الأسعار' : 'Request Pricing Details'}
              </h2>
              <div className="w-full pt-3">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700/80 to-transparent" />
              </div>
            </div>

            {/* Full Name */}
            <div className={`space-y-1.5 ${isArabic ? 'text-right' : 'text-left'}`}>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 font-bold">
                {isArabic ? 'الاسم بالكامل *' : 'FULL NAME *'}
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={isArabic ? 'الاسم الرسمي الخاص بك' : 'Your official name'}
                className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-colors backdrop-blur-sm"
              />
            </div>

            {/* Mobile Number */}
            <div className={`space-y-1.5 ${isArabic ? 'text-right' : 'text-left'}`}>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 font-bold">
                {isArabic ? 'رقم الهاتف *' : 'MOBILE NUMBER *'}
              </label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder={isArabic ? 'مثال: 01012268500' : 'e.g. 01012268500'}
                className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-colors backdrop-blur-sm"
              />
            </div>

            {/* Interested Unit */}
            <div className={`space-y-1.5 ${isArabic ? 'text-right' : 'text-left'}`}>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 font-bold">
                {isArabic ? 'الوحدة المطلوبة (اختياري)' : 'INTERESTED UNIT (OPTIONAL)'}
              </label>
              <div className="relative">
                <select
                  value={selectedUnitType}
                  onChange={(e) => setSelectedUnitType(e.target.value)}
                  className="w-full appearance-none bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/40 transition-colors cursor-pointer pr-10 backdrop-blur-sm"
                >
                  <option value="" className="bg-[#1c2636] text-slate-300">
                    {isArabic ? 'اختر النوع المفضل' : 'Select preferred type'}
                  </option>
                  <option value="1 Bedroom" className="bg-[#1c2636] text-white">
                    {isArabic ? 'شقة غرفة نوم واحدة' : '1 Bedroom Apartment'}
                  </option>
                  <option value="2 Bedrooms" className="bg-[#1c2636] text-white">
                    {isArabic ? 'شقة غرفتين نوم' : '2 Bedrooms Apartment'}
                  </option>
                  <option value="3 Bedrooms" className="bg-[#1c2636] text-white">
                    {isArabic ? 'شالية / شقة 3 غرف نوم' : '3 Bedrooms Chalet / Apartment'}
                  </option>
                  <option value="Townhouse" className="bg-[#1c2636] text-white">
                    {isArabic ? 'تاون هاوس / فيلا' : 'Townhouse / Town Villa'}
                  </option>
                  <option value="Standalone Villa" className="bg-[#1c2636] text-white">
                    {isArabic ? 'فيلا مستقلة' : 'Standalone Villa'}
                  </option>
                  <option value="Commercial Store / Office" className="bg-[#1c2636] text-white">
                    {isArabic ? 'محل تجاري / مكتب إداري' : 'Commercial Store / Office'}
                  </option>
                </select>
                <div className={`pointer-events-none absolute inset-y-0 flex items-center px-3 text-slate-400 ${isArabic ? 'left-0' : 'right-0'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-slate-100 active:bg-slate-200 text-neutral-950 font-mono font-black text-xs uppercase tracking-[0.2em] py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    {isArabic ? 'جاري الإرسال...' : 'SUBMITTING...'}
                  </span>
                ) : (
                  isArabic ? 'إرسال' : 'SUBMIT'
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Separate Hotline & WhatsApp Card Below Form */}
      <div className="w-full bg-[#0a111e]/55 backdrop-blur-md border border-amber-500/30 rounded-xl p-4 text-white shadow-xl flex items-center justify-between gap-3">
        <a
          href="tel:16547"
          className="flex items-center gap-2.5 group transition-all"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-amber-300 font-semibold">
              {isArabic ? 'الهوتلاين المباشر' : 'DIRECT HOTLINE'}
            </span>
            <span className="font-heading text-lg font-black tracking-wider text-white group-hover:text-amber-300 transition-colors">
              16547
            </span>
          </div>
        </a>

        <div className="h-8 w-[1px] bg-slate-700/80" />

        <a
          href="https://wa.me/201012268500"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-500/40 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:scale-105"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <div className="text-left">
            <span className="block text-[9px] uppercase tracking-wider text-emerald-100 font-mono">
              {isArabic ? 'واتساب' : 'WHATSAPP'}
            </span>
            <span className="font-mono text-xs font-extrabold tracking-wider">
              01012268500
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
