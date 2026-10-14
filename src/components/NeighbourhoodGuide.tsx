import React, { useState } from 'react';
import { MapPin, Train, Sparkles, Compass } from 'lucide-react';
import { LISBON_NEIGHBOURHOODS } from '../data/lisbonData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { LOCALIZED_NEIGHBOURHOODS } from '../i18n/contentLocalization';

interface NeighbourhoodGuideProps {
  currentLang: SupportedLanguage;
  onSelectNeighbourhood: (neighbourhoodName: string) => void;
}

export const NeighbourhoodGuide: React.FC<NeighbourhoodGuideProps> = ({
  currentLang,
  onSelectNeighbourhood,
}) => {
  const [activeId, setActiveId] = useState<string>(LISBON_NEIGHBOURHOODS[0].id);
  const t = TRANSLATIONS[currentLang];

  const activeNeighbourhood =
    LISBON_NEIGHBOURHOODS.find((n) => n.id === activeId) || LISBON_NEIGHBOURHOODS[0];

  const locN = LOCALIZED_NEIGHBOURHOODS[currentLang]?.[activeNeighbourhood.id];
  const displayVibe = locN?.vibe || activeNeighbourhood.vibe;
  const displayBestFor = locN?.bestFor || activeNeighbourhood.bestFor;
  const displayTip = locN?.tip || activeNeighbourhood.tip;

  return (
    <section id="neighbourhoods" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              District Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B192C]">
              {t.neighbourhoodsTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 max-w-md">
            Lisbon is a city of distinct villages. Explore what to expect in each unique neighbourhood.
          </p>
        </div>

        {/* Neighbourhood Selector Chips */}
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          {LISBON_NEIGHBOURHOODS.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setActiveId(n.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                activeId === n.id
                  ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-sm'
                  : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100 hover:border-amber-300'
              }`}
            >
              {n.name}
            </button>
          ))}
        </div>

        {/* Active Neighbourhood Spotlight Card */}
        <div className="mt-4 bg-[#FAF7F2] rounded-2xl border border-stone-300 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Image (5 cols) */}
          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px]">
            <img
              src={activeNeighbourhood.image}
              alt={activeNeighbourhood.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Lisbon District
              </span>
              <h3 className="text-2xl font-bold font-display mt-0.5">
                {activeNeighbourhood.name}
              </h3>
            </div>
          </div>

          {/* Right Column: Information Details (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Vibe */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-1">
                  The Atmosphere & Vibe
                </span>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  {displayVibe}
                </p>
              </div>

              {/* Best For */}
              <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs">
                <span className="font-bold text-[#C85A32] block mb-0.5">
                  Best For:
                </span>
                <span className="text-slate-700">{displayBestFor}</span>
              </div>

              {/* Key Highlights Tags */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                  Key Attractions & Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeNeighbourhood.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-amber-100/70 border border-amber-300/80 text-amber-950 text-xs font-semibold"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Transport Advice */}
              <div className="flex items-start gap-2 text-xs text-slate-700">
                <Train className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">How to get here: </strong>
                  <span>{activeNeighbourhood.transport}</span>
                </div>
              </div>

              {/* Insider Tip */}
              <div className="flex items-start gap-2 text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Local Secret: </strong>
                  <span>{displayTip}</span>
                </div>
              </div>

            </div>

            {/* Filter Directory by this Neighbourhood CTA */}
            <div className="pt-2 border-t border-stone-200">
              <button
                type="button"
                onClick={() => onSelectNeighbourhood(activeNeighbourhood.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B192C] text-white hover:bg-[#1E3E62] text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Show all places in {activeNeighbourhood.name}</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
