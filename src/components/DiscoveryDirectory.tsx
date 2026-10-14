import React, { useState } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Tag, 
  Train 
} from 'lucide-react';
import { LisbonSpot, SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface DiscoveryDirectoryProps {
  spots: LisbonSpot[];
  currentLang: SupportedLanguage;
  onAskAboutSpot: (spotName: string) => void;
}

export const DiscoveryDirectory: React.FC<DiscoveryDirectoryProps> = ({
  spots,
  currentLang,
  onAskAboutSpot,
}) => {
  const [expandedSpotId, setExpandedSpotId] = useState<string | null>(null);
  const t = TRANSLATIONS[currentLang];

  const toggleExpand = (id: string) => {
    setExpandedSpotId(expandedSpotId === id ? null : id);
  };

  return (
    <section id="directory" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
              {t.directoryBadge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B192C]">
              {t.directoryTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700">
            {t.directoryShowing} <span className="font-bold text-[#0B192C]">{spots.length}</span> {t.directoryVerifiedPlaces}
          </p>
        </div>

        {/* Empty State */}
        {spots.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50">
            <Sparkles className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">{t.noPlacesFound}</h3>
            <p className="text-sm text-stone-700 max-w-md mx-auto mt-1 mb-4">
              {t.noPlacesHint}
            </p>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spots.map((spot) => {
              const isExpanded = expandedSpotId === spot.id;

              return (
                <article
                  key={spot.id}
                  className="bg-white rounded-2xl border border-stone-200 hover:border-amber-400/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Spot Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={spot.imageUrl}
                      alt={spot.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
                      <span className="bg-[#0B192C]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{spot.neighbourhood}</span>
                      </span>

                      {/* Verification Status Badge */}
                      {spot.verificationStatus === 'free' ? (
                        <span className="bg-emerald-600/95 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                          {t.freeActivity}
                        </span>
                      ) : spot.verificationStatus === 'verified' ? (
                        <span className="bg-blue-700/95 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                          <span>{t.verifiedOfficial}</span>
                        </span>
                      ) : (
                        <span className="bg-amber-600/95 text-white text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
                          {t.priceEstimate}
                        </span>
                      )}
                    </div>

                    {/* Bottom Price Tag on Image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/95 text-[#0B192C] font-extrabold text-sm px-2.5 py-1 rounded-lg shadow-sm border border-stone-200">
                        {spot.price}
                      </span>
                    </div>
                  </div>

                  {/* Spot Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#C85A32] transition-colors leading-snug">
                        {spot.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {isExpanded ? spot.fullDescription : spot.shortDescription}
                      </p>

                      {/* Expand Button */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(spot.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#C85A32] mt-2 hover:underline cursor-pointer"
                      >
                        <span>{isExpanded ? t.showLess : t.readMore}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {/* Expanded Section Details */}
                      {isExpanded && (
                        <div className="mt-3.5 pt-3.5 border-t border-stone-100 space-y-2.5 text-xs text-slate-700 animate-in fade-in duration-150">
                          {spot.openingHours && (
                            <div className="flex items-start gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                              <div>
                                <span className="font-semibold text-slate-900">{t.hours}: </span>
                                <span>{spot.openingHours}</span>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start gap-1.5">
                            <Train className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-semibold text-slate-900">{t.transitTips}: </span>
                              <span>{spot.transitAdvice}</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-1.5 bg-amber-50/70 p-2 rounded-lg border border-amber-200/60">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-semibold text-amber-900">{t.localTip}: </span>
                              <span className="text-amber-800">{spot.tips}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tags & Action Buttons */}
                    <div className="mt-4 pt-3.5 border-t border-stone-100 space-y-3">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {spot.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                          >
                            <Tag className="w-2.5 h-2.5 text-stone-400" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={spot.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold transition-colors"
                        >
                          <Navigation className="w-3.5 h-3.5 text-stone-600" />
                          <span>{t.getDirections}</span>
                        </a>

                        {spot.officialUrl && (
                          <a
                            href={spot.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 transition-colors"
                            title={t.officialSite}
                            aria-label={`Official website for ${spot.name}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => onAskAboutSpot(spot.name)}
                          className="inline-flex items-center justify-center gap-1 px-2.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#0B192C] text-xs font-semibold transition-colors border border-amber-200"
                          title="Ask AI about this place"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          <span className="hidden sm:inline">{t.askAiAboutPlace}</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
