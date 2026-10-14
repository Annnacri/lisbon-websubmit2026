import React from 'react';
import { Compass, Sparkles, Heart, ShieldCheck, MapPin, Globe } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  currentLang: SupportedLanguage;
  onLanguageChange?: (lang: SupportedLanguage) => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange, onNavigate }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Purpose (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-[#0B192C] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Lisbon Made Easy
                </span>
                <span className="block text-xs text-amber-300 font-semibold">
                  AhnaX Edition
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 max-w-sm leading-relaxed">
              "Discover Lisbon. Make Every Moment Count." Your free, independent local guide to Lisbon, Portugal.
            </p>

            <p className="text-xs text-stone-400 max-w-sm italic">
              "Less confusion. Easier access. More time to enjoy Lisbon."
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free Access · No Account Mandatory</span>
            </div>
          </div>

          {/* Quick Discover Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Explore Lisbon
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('what-to-do')}
                  className="hover:text-white transition-colors"
                >
                  What Would You Like to Do?
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('directory')}
                  className="hover:text-white transition-colors"
                >
                  Discovery Directory
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('short-stays')}
                  className="hover:text-white transition-colors"
                >
                  Make the Most of Your Time
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('map-view')}
                  className="hover:text-white transition-colors"
                >
                  Interactive City Map
                </button>
              </li>
            </ul>
          </div>

          {/* Practical Planning */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Practical Information
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('budget-planner')}
                  className="hover:text-white transition-colors"
                >
                  Prices & Budget Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('transport')}
                  className="hover:text-white transition-colors"
                >
                  Airport Transfers & Metro
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('neighbourhoods')}
                  className="hover:text-white transition-colors"
                >
                  Neighbourhoods Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('ask-ai')}
                  className="hover:text-white transition-colors"
                >
                  Ask Lisbon AI Terminal
                </button>
              </li>
            </ul>
          </div>

          {/* WebSubmit & Portuguese Initiative */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              About & Submission
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Prepared for presentation and submission to WebSubmit. Developed with Portuguese tourism expertise and responsible AI.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about-creator')}
                className="text-xs font-semibold text-amber-300 hover:text-white underline flex items-center gap-1 cursor-pointer"
              >
                <span>About the Creator</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Language Switcher Row */}
        {onLanguageChange && (
          <div className="pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-stone-400">
              <Globe className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-stone-300">Languages / Idiomas:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { code: 'en' as SupportedLanguage, label: 'English', flag: '🇬🇧' },
                { code: 'pt' as SupportedLanguage, label: 'Português', flag: '🇵🇹' },
                { code: 'es' as SupportedLanguage, label: 'Español', flag: '🇪🇸' },
                { code: 'de' as SupportedLanguage, label: 'Deutsch', flag: '🇩🇪' },
                { code: 'fr' as SupportedLanguage, label: 'Français', flag: '🇫🇷' },
                { code: 'it' as SupportedLanguage, label: 'Italiano', flag: '🇮🇹' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    currentLang === lang.code
                      ? 'bg-amber-400 text-[#0B192C] font-bold shadow-xs'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mandatory Footer Requirement 6 */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="font-semibold text-stone-200">
            Built by AhnaX · WebSubmit 2026
          </div>

          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Created in Portugal with local care</span>
            <span className="text-amber-400">♥</span>
          </div>

          <div className="text-[11px] text-stone-500">
            All prices and transit fares are verified estimates. Check official sources before booking.
          </div>
        </div>

      </div>
    </footer>
  );
};
