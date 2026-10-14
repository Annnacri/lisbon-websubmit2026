import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, MapPin, CheckCircle2, ArrowRight, Music, Share2 } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { portugueseGuitar } from '../utils/portugueseGuitarAudio';
import { SocialShare } from './SocialShare';

interface HeroProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onExploreClick: () => void;
  onAskAiClick: () => void;
  totalSpotsCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onLanguageChange,
  onExploreClick,
  onAskAiClick,
  totalSpotsCount,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [isGuitarPlaying, setIsGuitarPlaying] = useState(false);

  useEffect(() => {
    const unsub = portugueseGuitar.subscribe((playing) => {
      setIsGuitarPlaying(playing);
    });
    return () => unsub();
  }, []);

  const quickLangs: { code: SupportedLanguage; flag: string; label: string }[] = [
    { code: 'en', flag: '🇬🇧', label: 'English' },
    { code: 'pt', flag: '🇵🇹', label: 'Português' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
    { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
    { code: 'fr', flag: '🇫🇷', label: 'Français' },
    { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-amber-900/10 transition-colors"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* =========================================================================
          SOPHISTICATED LISBON BACKGROUND SYSTEM (RESPONSIVE & AUTHENTIC)
          - Real Lisbon panoramic photography over the Rio Tejo, Alfama rooftops & golden light
          - Responsive framing: Desktop panoramic, Tablet balanced, Mobile simplified & legible
          - Color harmony: Azul do Tejo (#0B192C / #1E3E62), Branco Luz (#FAF7F2), 
            Dourado Sol (#D97706 / #F59E0B), Terracota Histórica (#C85A32)
          - Delicate Portuguese Azulejo tile geometry overlay
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Layer 1: Authentic Lisbon Panoramic Horizon (Rio Tejo & Alfama Terracotta Rooftops) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=2000&q=80"
            alt="Lisboa panorâmica com Rio Tejo, luz dourada e arquitetura histórica"
            className="w-full h-full object-cover object-[65%_25%] sm:object-[center_30%] lg:object-[center_26%] opacity-30 sm:opacity-35 lg:opacity-45 select-none filter saturate-[1.08]"
            loading="eager"
          />
        </div>

        {/* Layer 2: Responsive Contrast Gradients & Soft Veil
            - Mobile: Soft protective veil (95% to 90% opacity) keeping headline & CTAs 100% legible
            - Tablet & Desktop: Gentle lateral wash opening toward the Tagus river on the right */}
        <div className="absolute inset-0 bg-linear-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/90 to-[#FAF7F2] lg:bg-linear-to-r lg:from-[#FAF7F2] lg:via-[#FAF7F2]/92 lg:via-55% lg:to-[#FAF7F2]/35" />

        {/* Layer 3: Warm Golden Lisbon Sunlight Glow (Luz Dourada de Lisboa & Sol no Tejo) */}
        <div 
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 85% 20%, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.08) 45%, transparent 75%)',
          }}
        />

        {/* Layer 4: Warm Alfama Terracotta Glow (Tons quentes de telhados e barro) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 15% 85%, rgba(200, 90, 50, 0.09) 0%, transparent 65%)',
          }}
        />

        {/* Layer 5: Tagus River Blue (Azul profundo do Rio Tejo) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(30, 62, 98, 0.06) 0%, transparent 70%)',
          }}
        />

        {/* Layer 6: Authentic Portuguese Azulejo Geometry (Lisboa Traditional Star & Diamond Motifs) */}
        <div className="absolute inset-0 opacity-[0.06] sm:opacity-[0.07] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="lisbon-azulejo-grid" width="64" height="64" patternUnits="userSpaceOnUse">
                {/* Traditional Lisbon Azulejo Octagonal & Floral Star Geometry */}
                <path d="M32 0 L64 32 L32 64 L0 32 Z" fill="none" stroke="#1E3E62" strokeWidth="1.2" />
                <path d="M0 0 L16 16 M48 16 L64 0 M0 64 L16 48 M48 48 L64 64" stroke="#1E3E62" strokeWidth="1" />
                <circle cx="32" cy="32" r="10" fill="none" stroke="#C85A32" strokeWidth="1.2" />
                <circle cx="32" cy="32" r="4" fill="#D97706" />
                <path d="M32 16 L32 24 M32 40 L32 48 M16 32 L24 32 M40 32 L48 32" stroke="#1E3E62" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lisbon-azulejo-grid)" />
          </svg>
        </div>

        {/* Layer 7: Smooth Calçada & River Transition Divider at Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-linear-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge & Instant Language Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
                <span>{t.tagline}</span>
              </div>

              {/* Language Chips */}
              <div className="flex items-center gap-1 bg-white/90 p-1 rounded-full border border-stone-200 shadow-2xs">
                {quickLangs.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => onLanguageChange(item.code)}
                    title={item.label}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      currentLang === item.code
                        ? 'bg-[#0B192C] text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span className="uppercase text-[10px] hidden sm:inline">{item.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Clear H1 Heading containing "Lisbon Made Easy" for SEO & Identity */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0B192C] tracking-tight leading-[1.1]">
                Lisbon Made Easy
              </h1>
              <p className="text-xl sm:text-2xl text-[#C85A32] font-semibold font-display">
                {t.heroHeadline}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.heroSupporting}
            </p>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-[#C85A32]/40 pl-3 italic">
              "{t.supportingMessage}"
            </p>

            {/* Two Primary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C85A32] text-white hover:bg-[#a6431f] text-sm sm:text-base font-semibold shadow-md shadow-orange-950/10 hover:shadow-lg transition-all cursor-pointer group"
              >
                <Compass className="w-5 h-5 text-amber-200 group-hover:rotate-45 transition-transform" />
                <span>{t.exploreLisbon}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onAskAiClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B192C] text-white hover:bg-[#1E3E62] text-sm sm:text-base font-semibold shadow-md transition-all cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>{t.askLisbonAi}</span>
              </button>
            </div>

            {/* Quick Portuguese Guitar Sound Experience Toggle */}
            <div className="pt-1 flex items-center justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => portugueseGuitar.toggle()}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer select-none shadow-2xs ${
                  isGuitarPlaying
                    ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-300/60'
                    : 'bg-white/90 hover:bg-amber-50 text-amber-950 border-amber-300/80 hover:border-amber-400'
                }`}
              >
                <Music className={`w-4 h-4 ${isGuitarPlaying ? 'text-slate-950 animate-bounce' : 'text-amber-700'}`} />
                <span>
                  {isGuitarPlaying
                    ? (currentLang === 'pt' ? '🎸 Som da Guitarra Portuguesa Ligado (Clique para Desligar)' : '🎸 Portuguese Guitar Sound ON (Click to Turn Off)')
                    : (currentLang === 'pt' ? '🎸 Ligar Som da Guitarra Portuguesa de Lisboa' : '🎸 Turn On Portuguese Guitar Sound')}
                </span>
                <span className={`w-2 h-2 rounded-full ${isGuitarPlaying ? 'bg-emerald-600 animate-ping' : 'bg-amber-500'}`} />
              </button>
            </div>

            {/* Quick Social Share Buttons */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>{currentLang === 'pt' ? 'Partilhar nas redes:' : 'Share guide:'}</span>
              </span>
              <SocialShare currentLang={currentLang} variant="compact" />
            </div>

            {/* Practical Value Badges */}
            <div className="pt-4 border-t border-amber-900/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free Access</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Prices in €</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No Account Needed</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Lisbon Photography Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container with warm shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-900">
                <img
                  src="/images/miradouro-santa-luzia.jpg"
                  alt="Miradouro de Santa Luzia, azulejos e telhados de Alfama sobre o Rio Tejo"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                      Miradouro de Santa Luzia · Alfama
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-100">
                    "Less confusion. Easier access. More time to enjoy Lisbon."
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20 text-xs text-stone-200">
                    <span>{totalSpotsCount} Curated Places</span>
                    <span className="font-semibold text-amber-300">Updated for 2026</span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Pill */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-[#FAF7F2] border border-amber-200 shadow-lg rounded-xl px-3.5 py-2 flex items-center gap-2 text-xs font-bold text-[#0B192C]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>WebSubmit 2026 Edition</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
