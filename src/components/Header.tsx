import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, MapPin, Menu, X, Globe, Euro, Clock, Train, Volume2, VolumeX, Music } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { portugueseGuitar } from '../utils/portugueseGuitarAudio';

interface HeaderProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigate: (sectionId: string) => void;
}

export const LANGUAGES: { code: SupportedLanguage; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isGuitarPlaying, setIsGuitarPlaying] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const unsub = portugueseGuitar.subscribe((playing) => {
      setIsGuitarPlaying(playing);
    });
    return () => unsub();
  }, []);

  const handleToggleGuitar = () => {
    portugueseGuitar.toggle();
  };

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-amber-400 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xl text-[#0B192C] tracking-tight">
                  Lisbon Made Easy
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  AhnaX
                </span>
              </div>
              <p className="text-xs text-stone-700 hidden sm:block">
                WebSubmit Edition
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('what-to-do')}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#C85A32] rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              {t.whatWouldYouLikeToDo}
            </button>
            <button
              onClick={() => handleNavClick('directory')}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#C85A32] rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              {t.exploreLisbon}
            </button>
            <button
              onClick={() => handleNavClick('short-stays')}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#C85A32] rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              {t.shortStaysTitle}
            </button>
            <button
              onClick={() => handleNavClick('budget-planner')}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#C85A32] rounded-lg hover:bg-amber-50/70 transition-colors flex items-center gap-1"
            >
              <Euro className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'pt' ? 'Orçamento' : currentLang === 'es' ? 'Presupuesto' : currentLang === 'de' ? 'Budget' : currentLang === 'fr' ? 'Budget' : currentLang === 'it' ? 'Budget' : 'Budget'}</span>
            </button>
            <button
              onClick={() => handleNavClick('neighbourhoods')}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#C85A32] rounded-lg hover:bg-amber-50/70 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>{currentLang === 'pt' ? 'Bairros' : currentLang === 'es' ? 'Barrios' : currentLang === 'de' ? 'Stadtteile' : currentLang === 'fr' ? 'Quartiers' : currentLang === 'it' ? 'Quartieri' : 'Neighbourhoods'}</span>
            </button>
            <button
              onClick={() => handleNavClick('transport')}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#C85A32] rounded-lg hover:bg-amber-50/70 transition-colors flex items-center gap-1"
            >
              <Train className="w-4 h-4 text-blue-600" />
              <span>{currentLang === 'pt' ? 'Transportes' : currentLang === 'es' ? 'Transporte' : currentLang === 'de' ? 'Transport' : currentLang === 'fr' ? 'Transports' : currentLang === 'it' ? 'Trasporti' : 'Transport'}</span>
            </button>
            <button
              onClick={() => handleNavClick('map-view')}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#C85A32] rounded-lg hover:bg-amber-50/70 transition-colors"
            >
              {currentLang === 'pt' ? 'Mapa' : currentLang === 'es' ? 'Mapa' : currentLang === 'de' ? 'Karte' : currentLang === 'fr' ? 'Carte' : currentLang === 'it' ? 'Mappa' : 'Map'}
            </button>
          </nav>

          {/* Right Action: Language Selector & AI Button */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Portuguese Guitar Sound Toggle Button */}
            <button
              type="button"
              onClick={handleToggleGuitar}
              title={isGuitarPlaying ? 'Desligar som da Guitarra Portuguesa' : 'Ligar som da Guitarra Portuguesa'}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-semibold rounded-lg transition-all border cursor-pointer select-none ${
                isGuitarPlaying
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-400/50'
                  : 'bg-white text-slate-700 border-stone-200 hover:bg-amber-50 shadow-2xs'
              }`}
              aria-label="Som da Guitarra Portuguesa"
            >
              {isGuitarPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
                  <span className="hidden md:inline font-bold">Guitarra ON</span>
                  <span className="md:hidden font-bold">ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                  <span className="hidden md:inline text-stone-600">Guitarra OFF</span>
                  <span className="md:hidden text-stone-600">OFF</span>
                </>
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-stone-200 rounded-lg hover:bg-amber-50 shadow-2xs transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{LANGUAGES.find((l) => l.code === currentLang)?.flag}</span>
                <span className="hidden sm:inline uppercase">{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[11px] font-semibold text-stone-700 uppercase tracking-wider border-b border-stone-100 mb-1">
                    Language / Idioma
                  </div>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onLanguageChange(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs text-left transition-colors ${
                        currentLang === l.code
                          ? 'bg-amber-50 text-amber-900 font-bold'
                          : 'text-slate-700 hover:bg-stone-50'
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Ask Lisbon AI Primary CTA */}
            <button
              onClick={() => handleNavClick('ask-ai')}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#0B192C] text-white hover:bg-[#1E3E62] transition-colors shadow-sm text-xs sm:text-sm font-semibold group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>{t.askLisbonAi}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-stone-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          
          {/* Quick Guitar Sound Bar in Mobile Drawer */}
          <div className="p-3 bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-amber-50 rounded-xl border border-amber-500/30 mb-2 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold block text-amber-200">
                  Guitarra Portuguesa
                </span>
                <span className="text-[10px] text-stone-300">
                  {isGuitarPlaying ? 'Som ligado · A tocar fado' : 'Som desligado'}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleToggleGuitar}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isGuitarPlaying
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                  : 'bg-amber-600 text-white hover:bg-amber-500'
              }`}
            >
              {isGuitarPlaying ? 'Desligar' : 'Ligar Som'}
            </button>
          </div>

          {/* Quick Language Switcher in Mobile Drawer */}
          <div className="p-2.5 bg-white rounded-xl border border-stone-200 mb-2">
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1.5">
              Select Language / Escolha o Idioma:
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => {
                    onLanguageChange(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    currentLang === l.code
                      ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-xs'
                      : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-amber-50'
                  }`}
                >
                  <span className="text-base">{l.flag}</span>
                  <span className="uppercase text-[11px]">{l.code}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavClick('what-to-do')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg"
          >
            {t.whatWouldYouLikeToDo}
          </button>
          <button
            onClick={() => handleNavClick('directory')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg"
          >
            {t.exploreLisbon}
          </button>
          <button
            onClick={() => handleNavClick('short-stays')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg flex items-center gap-2"
          >
            <Clock className="w-4 h-4 text-amber-700" />
            <span>{t.shortStaysTitle}</span>
          </button>
          <button
            onClick={() => handleNavClick('budget-planner')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg flex items-center gap-2"
          >
            <Euro className="w-4 h-4 text-amber-700" />
            <span>{currentLang === 'pt' ? 'Preços e Planeador de Orçamento' : currentLang === 'es' ? 'Precios y Presupuesto' : currentLang === 'de' ? 'Preise & Budgetplaner' : currentLang === 'fr' ? 'Prix et Budget' : currentLang === 'it' ? 'Prezzi e Budget' : 'Prices & Budget Planner'}</span>
          </button>
          <button
            onClick={() => handleNavClick('neighbourhoods')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg flex items-center gap-2"
          >
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>{currentLang === 'pt' ? 'Guia de Bairros' : currentLang === 'es' ? 'Guía de Barrios' : currentLang === 'de' ? 'Stadtviertel-Guide' : currentLang === 'fr' ? 'Guide des Quartiers' : currentLang === 'it' ? 'Guida ai Quartieri' : 'Neighbourhoods Guide'}</span>
          </button>
          <button
            onClick={() => handleNavClick('transport')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg flex items-center gap-2"
          >
            <Train className="w-4 h-4 text-blue-700" />
            <span>{currentLang === 'pt' ? 'Transportes e Aeroporto' : currentLang === 'es' ? 'Transporte y Aeropuerto' : currentLang === 'de' ? 'Transport & Flughafen' : currentLang === 'fr' ? 'Transports et Aéroport' : currentLang === 'it' ? 'Trasporti e Aeroporto' : 'Transport & Airport'}</span>
          </button>
          <button
            onClick={() => handleNavClick('map-view')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg"
          >
            {currentLang === 'pt' ? 'Mapa Interativo da Cidade' : currentLang === 'es' ? 'Mapa Interactivo' : currentLang === 'de' ? 'Interaktive Stadtkarte' : currentLang === 'fr' ? 'Carte Interactive' : currentLang === 'it' ? 'Mappa Interattiva' : 'Interactive City Map'}
          </button>
          <button
            onClick={() => handleNavClick('about-creator')}
            className="w-full text-left px-3 py-2.5 text-sm font-medium text-amber-900 hover:bg-amber-100 rounded-lg flex items-center justify-between"
          >
            <span>{t.aboutTheCreatorTitle}</span>
            <span>→</span>
          </button>
        </div>
      )}
    </header>
  );
};
