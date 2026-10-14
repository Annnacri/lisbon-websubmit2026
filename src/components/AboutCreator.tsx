import React from 'react';
import { 
  ArrowLeft, 
  Compass, 
  Sparkles, 
  Code2, 
  Layers, 
  Bot, 
  Globe2, 
  Blocks, 
  MapPin, 
  Heart 
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface AboutCreatorProps {
  currentLang: SupportedLanguage;
  onBackToExplore: () => void;
}

export const AboutCreator: React.FC<AboutCreatorProps> = ({ currentLang, onBackToExplore }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="about-creator" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Back Action */}
        <div>
          <button
            type="button"
            onClick={onBackToExplore}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-stone-100 text-[#0B192C] font-semibold text-xs sm:text-sm border border-stone-300 shadow-2xs transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#C85A32] group-hover:-translate-x-1 transition-transform" />
            <span>{t.backToExplore}</span>
          </button>
        </div>

        {/* Main Profile Story Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-amber-200/90 shadow-lg relative overflow-hidden space-y-8">
          
          {/* Subtle Azulejo Background Accent */}
          <div className="absolute top-0 right-0 w-44 h-44 opacity-8 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="#1E3E62" strokeWidth="2">
              <path d="M0 0 L100 100 M100 0 L0 100 M50 0 L50 100 M0 50 L100 50" />
              <circle cx="50" cy="50" r="30" />
            </svg>
          </div>

          {/* Header Profile Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-stone-200 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0B192C] text-amber-400 flex items-center justify-center font-extrabold font-display text-2xl shadow-md border-2 border-amber-300/40 shrink-0">
                AX
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Portugal · Local Creator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0B192C] tracking-tight">
                  {t.aboutTheCreatorTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  AI Product Builder & Tourism Specialist · AhnaX
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300/80 text-xs font-semibold self-start sm:self-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Independent Project</span>
            </div>
          </div>

          {/* Verbatim Story Content */}
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            {t.aboutTheCreatorStory.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Areas of Exploration & Focus */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
              Areas of Focus & Innovation
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-100 text-slate-800 text-xs font-semibold border border-stone-200">
                <Bot className="w-3.5 h-3.5 text-amber-700" />
                <span>AI Applications & Intelligent Agents</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-100 text-slate-800 text-xs font-semibold border border-stone-200">
                <Code2 className="w-3.5 h-3.5 text-blue-700" />
                <span>Product Building & Automation</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-100 text-slate-800 text-xs font-semibold border border-stone-200">
                <Blocks className="w-3.5 h-3.5 text-emerald-700" />
                <span>Web3 & Blockchain Exploration</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-100 text-slate-800 text-xs font-semibold border border-stone-200">
                <Globe2 className="w-3.5 h-3.5 text-purple-700" />
                <span>Tourism & Hospitality Insight</span>
              </span>
            </div>
          </div>

          {/* Signature & Closing */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-display font-bold text-lg text-[#0B192C]">
                {t.creatorSignature}
              </div>
              <p className="text-xs text-stone-600">
                WebSubmit 2026 Presentation Edition
              </p>
            </div>

            <button
              type="button"
              onClick={onBackToExplore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C85A32] text-white hover:bg-[#a6431f] text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-200" />
              <span>{t.backToExplore}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
