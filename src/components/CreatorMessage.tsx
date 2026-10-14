import React from 'react';
import { Heart, Compass, Sparkles } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface CreatorMessageProps {
  currentLang: SupportedLanguage;
}

export const CreatorMessage: React.FC<CreatorMessageProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="creator" className="py-16 bg-[#FAF7F2] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-md relative overflow-hidden">
          
          {/* Subtle Azulejo Corner Ornament */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="#1E3E62" strokeWidth="2">
              <path d="M0 0 L100 100 M100 0 L0 100 M50 0 L50 100 M0 50 L100 50" />
              <circle cx="50" cy="50" r="30" />
            </svg>
          </div>

          {/* Heading */}
          <div className="flex items-center gap-2.5 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-4 h-4 fill-current" />
            <span>Personal Note</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0B192C] leading-snug">
            {t.creatorSectionTitle}
          </h2>

          {/* Authentic Unmodified Message */}
          <div className="mt-6 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              This app was created by a Portuguese local who has worked in tourism for several years and has a strong interest in Web3 and emerging technologies.
            </p>
            <p>
              I hope it will be useful to visitors, especially those who only have a short time to discover Lisbon.
            </p>
            <p>
              We all know how confusing it can be to arrive in another country, try to find our way around, understand local transport, discover places to eat, find something interesting to do or simply work out what is nearby. I know this feeling myself.
            </p>
            <p>
              My aim is to make discovering Lisbon easier, more accessible and less stressful, with practical information and experiences that help visitors make the most of their stay.
            </p>
            <p>
              I hope this little project makes your time in Lisbon a little easier, more enjoyable and more memorable.
            </p>
            <p className="font-semibold text-slate-900 text-base">
              Welcome to Lisbon!
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B192C] text-amber-400 flex items-center justify-center font-bold font-display text-sm">
                AX
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm font-display">
                  {t.creatorSignature}
                </div>
                <div className="text-xs text-stone-600">
                  Tourism & Emerging Technologies · Portugal
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 px-3 py-1.5 rounded-full">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>Independent Project</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
