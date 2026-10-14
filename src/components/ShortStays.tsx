import React, { useState } from 'react';
import { Clock, Sparkles, MapPin, ChevronRight, Train, CheckCircle2 } from 'lucide-react';
import { SHORT_STAY_PLANS } from '../data/lisbonData';
import { ShortStayPlan, SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { LOCALIZED_SHORT_STAYS } from '../i18n/contentLocalization';

interface ShortStaysProps {
  currentLang: SupportedLanguage;
  onCustomizeWithAI: (planTitle: string) => void;
}

export const ShortStays: React.FC<ShortStaysProps> = ({
  currentLang,
  onCustomizeWithAI,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(SHORT_STAY_PLANS[0].id);
  const t = TRANSLATIONS[currentLang];

  const currentPlan = SHORT_STAY_PLANS.find((p) => p.id === selectedPlanId) || SHORT_STAY_PLANS[0];
  const localizedCurrent = LOCALIZED_SHORT_STAYS[currentLang]?.[currentPlan.id];
  const displayTitle = localizedCurrent?.title || currentPlan.title;
  const displayBadge = localizedCurrent?.badge || currentPlan.badge;
  const displaySummary = localizedCurrent?.summary || currentPlan.summary;

  return (
    <section id="short-stays" className="py-12 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              Short Stay Assistance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B192C]">
              {t.shortStaysTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 max-w-md">
            {t.shortStaysSubtitle}
          </p>
        </div>

        {/* Plan Selectors Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 mb-8">
          {SHORT_STAY_PLANS.map((plan) => {
            const loc = LOCALIZED_SHORT_STAYS[currentLang]?.[plan.id];
            const btnTitle = loc?.title || plan.title;

            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlanId(plan.id)}
                className={`p-2.5 rounded-xl text-center text-xs font-semibold transition-all flex flex-col items-center justify-center cursor-pointer border ${
                  selectedPlanId === plan.id
                    ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-md scale-102'
                    : 'bg-white text-slate-700 border-stone-300 hover:border-amber-400 hover:bg-amber-50/50'
                }`}
              >
                <span className="truncate w-full">{btnTitle}</span>
                <span className={`text-[10px] mt-1 ${selectedPlanId === plan.id ? 'text-amber-300' : 'text-stone-600'}`}>
                  {plan.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Plan Details Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
          
          {/* Card Header Banner */}
          <div className="p-6 bg-linear-to-r from-[#0B192C] to-[#1E3E62] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {displayBadge}
                </span>
                <span className="text-xs text-stone-300">
                  {t.idealFor}: {currentPlan.idealFor}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display">
                {displayTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-2xl">
                {displaySummary}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-white/20 pt-3 sm:pt-0 sm:pl-6 shrink-0 text-left sm:text-right">
              <div>
                <span className="text-[11px] text-stone-300">{t.estTotalCost}</span>
                <div className="text-lg font-bold text-amber-300 font-display">
                  {currentPlan.totalEstCost}
                </div>
              </div>
              <button
                type="button"
                onClick={() => onCustomizeWithAI(currentPlan.title)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-[#0B192C] text-xs font-bold hover:bg-amber-300 transition-colors shadow-xs mt-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.customiseWithAi}</span>
              </button>
            </div>
          </div>

          {/* Schedule Steps & Transit Details */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Steps Timeline (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C85A32]" />
                <span>{t.timelineTitle}</span>
              </h4>

              <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200">
                {currentPlan.schedule.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-8">
                    {/* Circle Node */}
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#C85A32] border-2 border-white shadow-xs"></div>

                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex-1 hover:border-amber-300 transition-colors space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <span className="font-bold text-[#0B192C] bg-white px-2 py-0.5 rounded-md border border-stone-200 inline-block w-fit">
                          {step.time}
                        </span>
                        <span className="font-semibold text-emerald-800">
                          {step.cost}
                        </span>
                      </div>

                      <div className="font-semibold text-sm text-slate-900 mt-1">
                        {step.action}
                      </div>

                      <div className="text-xs text-stone-600 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C85A32]" />
                        <span>{step.location}</span>
                      </div>

                      <p className="text-xs text-slate-600 bg-white p-2 rounded-lg border border-stone-200/60 mt-2">
                        <strong className="text-amber-800">{t.localAdvice}:</strong> {step.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Transit & Highlights (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Transit Advice Box */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider">
                  <Train className="w-4 h-4 text-blue-700" />
                  <span>Transport Logistics</span>
                </div>
                <p className="text-xs text-blue-950 leading-relaxed">
                  {currentPlan.transitSummary}
                </p>
              </div>

              {/* Highlights Checkpoints */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                  Signature Highlights
                </span>
                <ul className="space-y-2">
                  {currentPlan.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Notice */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-[11px] text-stone-600 leading-relaxed italic">
                *Lisbon Made Easy provides discovery and immediate local guidance without forcing complex itinerary bookings.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
