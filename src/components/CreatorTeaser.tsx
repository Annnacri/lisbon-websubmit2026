import React from 'react';
import { Compass, ArrowRight, Heart } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface CreatorTeaserProps {
  currentLang: SupportedLanguage;
  onMeetCreator: () => void;
}

export const CreatorTeaser: React.FC<CreatorTeaserProps> = ({ currentLang, onMeetCreator }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-12 bg-white/80 border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/80 text-xs font-semibold">
          <Heart className="w-3.5 h-3.5 text-[#C85A32] fill-current" />
          <span>Local Perspective</span>
        </div>

        {/* Short Personal Message specified in Requirement 1 */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium max-w-2xl mx-auto">
          {t.homepageCreatorTeaser}
        </p>

        {/* Link: "Meet the Creator" */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onMeetCreator}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B192C] text-white hover:bg-[#1E3E62] text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer group"
          >
            <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
            <span>{t.meetTheCreator}</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
