import React, { useState } from 'react';
import { Project } from '../types';
import { X, Download, ChevronLeft, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

interface BrochureModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquire: () => void;
  language?: 'EN' | 'AR';
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenEnquire,
  language = 'EN'
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  if (!isOpen) return null;

  const isArabic = language === 'AR';
  const totalPages = project.brochurePages.length;

  const displayName = isArabic && project.nameAr ? project.nameAr : project.name;
  const displayLocation = isArabic && project.locationAr ? project.locationAr : project.location;
  const displayShortDesc = isArabic && project.shortDescriptionAr ? project.shortDescriptionAr : project.shortDescription;
  const displayLandArea = isArabic && project.landAreaAr ? project.landAreaAr : project.landArea;
  const displayFootprint = isArabic && project.footprintAr ? project.footprintAr : project.footprint;
  const displayPaymentPlan = isArabic && project.paymentPlanAr ? project.paymentPlanAr : project.paymentPlan;
  const displayDeliveryDate = isArabic && project.deliveryDateAr ? project.deliveryDateAr : project.deliveryDate;

  const handleDownload = () => {
    // Generate brochure download simulation
    const link = document.createElement('a');
    link.href = project.brochurePages[currentPageIndex] || project.image;
    link.download = `${project.name}-Brochure-IL-CAZAR.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-black/50 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-800 rounded-lg text-amber-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider">
                {isArabic ? `كتالوج وتفاصيل ${displayName}` : `${project.name} Brochure & Fact Sheet`}
              </h3>
              <p className="text-xs text-neutral-400">
                {isArabic ? `صفحة ${currentPageIndex + 1} من ${totalPages}` : `Page ${currentPageIndex + 1} of ${totalPages}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-white hover:bg-neutral-200 text-neutral-900 text-xs font-bold tracking-wider uppercase rounded-lg transition-colors flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">{isArabic ? 'تحميل الصفحة' : 'Download Page'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-1 overflow-y-auto">
          {/* Main Brochure Viewer (2 cols) */}
          <div className="lg:col-span-2 relative bg-black/60 p-4 sm:p-8 flex items-center justify-center min-h-[350px]">
            <img
              src={project.brochurePages[currentPageIndex]}
              alt={`Page ${currentPageIndex + 1}`}
              referrerPolicy="no-referrer"
              className="max-h-[60vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
            />

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <>
                <button
                  disabled={currentPageIndex === 0}
                  onClick={() => setCurrentPageIndex(prev => Math.max(0, prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  disabled={currentPageIndex === totalPages - 1}
                  onClick={() => setCurrentPageIndex(prev => Math.min(totalPages - 1, prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Quick Factsheet Summary (1 col) */}
          <div className="p-6 sm:p-8 bg-neutral-900 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  {isArabic ? 'ملخص المشروع' : 'Master Overview'}
                </span>
                <h4 className="font-heading text-2xl font-extrabold mt-1">{displayName}</h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{displayShortDesc}</p>
              </div>

              {/* Specs Table */}
              <div className="space-y-3 pt-2 text-xs border-t border-neutral-800">
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">{isArabic ? 'الموقع' : 'Location'}</span>
                  <span className="font-semibold text-white">{displayLocation}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">{isArabic ? 'مساحة الأرض' : 'Total Land Area'}</span>
                  <span className="font-semibold text-white">{displayLandArea}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">{isArabic ? 'نسبة البناء' : 'Footprint'}</span>
                  <span className="font-semibold text-white">{displayFootprint}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">{isArabic ? 'خطة السداد' : 'Payment Plan'}</span>
                  <span className="font-semibold text-amber-300">{displayPaymentPlan}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">{isArabic ? 'التسليم' : 'Delivery'}</span>
                  <span className="font-semibold text-white">{displayDeliveryDate}</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h5 className="text-xs uppercase font-bold tracking-wider text-neutral-300 mb-2">
                  {isArabic ? 'أبرز المميزات' : 'Key Highlights'}
                </h5>
                <ul className="space-y-2">
                  {(isArabic && project.highlightsAr ? project.highlightsAr : project.highlights).slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Enquire Callout */}
            <div className="pt-6 border-t border-neutral-800">
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquire();
                }}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-lg text-center"
              >
                {isArabic ? 'طلب المخطط العام وقائمة الأسعار' : 'Request Full Masterplan & Price List'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
