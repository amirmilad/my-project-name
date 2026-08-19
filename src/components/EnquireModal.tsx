import React from 'react';
import { Project } from '../types';
import { X } from 'lucide-react';
import { PricingRequestForm } from './PricingRequestForm';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  preselectedProjectId?: string;
  language?: 'EN' | 'AR';
}

export const EnquireModal: React.FC<EnquireModalProps> = ({
  isOpen,
  onClose,
  projects,
  language = 'EN'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 p-2 bg-neutral-900 text-white rounded-full border border-slate-700 hover:bg-neutral-800 transition-all shadow-lg"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <PricingRequestForm
          projects={projects}
          language={language}
          onSuccessSubmit={() => {
            // keep form visible with success message or auto-close after 3 seconds
          }}
        />
      </div>
    </div>
  );
};

