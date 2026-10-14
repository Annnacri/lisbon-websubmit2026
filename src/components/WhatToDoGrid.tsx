import React from 'react';
import { 
  Landmark, 
  UtensilsCrossed, 
  Moon, 
  Wine, 
  Sparkles, 
  Waves, 
  Euro, 
  Palette, 
  Heart, 
  Smile, 
  Map, 
  Train 
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { LOCALIZED_CARDS } from '../i18n/contentLocalization';

interface WhatToDoCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  badge: string;
  actionType: 'filter-category' | 'filter-budget' | 'open-transport' | 'open-ai' | 'filter-family' | 'filter-free';
  targetValue: string;
}

interface WhatToDoGridProps {
  currentLang: SupportedLanguage;
  onCardSelect: (actionType: string, targetValue: string) => void;
}

const CARDS: WhatToDoCard[] = [
  {
    id: 'historic-lisbon',
    title: '1. Explore Historic Lisbon',
    description: 'Discover traditional neighbourhoods, monuments and panoramic viewpoints.',
    icon: Landmark,
    image: '/images/castelo-sao-jorge.jpg',
    badge: 'Monuments & Views',
    actionType: 'filter-category',
    targetValue: 'attractions'
  },
  {
    id: 'eat-like-local',
    title: '2. Eat Like a Local',
    description: 'Find Portuguese restaurants, petiscos, seafood, bakeries and local cafés.',
    icon: UtensilsCrossed,
    image: '/images/pasteis-de-belem.jpg',
    badge: 'Tascas & Sweets',
    actionType: 'filter-category',
    targetValue: 'food'
  },
  {
    id: 'do-tonight',
    title: '3. Find Something to Do Tonight',
    description: 'Explore nightlife, live music, bars and confirmed upcoming events where data is available.',
    icon: Moon,
    image: '/images/pink-street.jpg',
    badge: 'Evening & Night',
    actionType: 'filter-category',
    targetValue: 'nightlife'
  },
  {
    id: 'bars-rooftops',
    title: '4. Discover Bars and Rooftops',
    description: 'Find places for cocktails, sunset views and relaxed evenings.',
    icon: Wine,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80',
    badge: 'Sunset Views',
    actionType: 'open-ai',
    targetValue: 'Find somewhere beautiful to watch the sunset.'
  },
  {
    id: 'free-things',
    title: '5. Find Free Things to Do',
    description: 'Explore viewpoints, parks, neighbourhood walks and free cultural activities.',
    icon: Sparkles,
    image: '/images/miradouro-senhora-monte.jpg',
    badge: '€0 Cost',
    actionType: 'filter-free',
    targetValue: 'free'
  },
  {
    id: 'beaches-lisbon',
    title: '6. Beaches Near Lisbon',
    description: 'Discover nearby beaches, transport options and outdoor activities.',
    icon: Waves,
    image: '/images/cascais.jpg',
    badge: 'Sun & Surf',
    actionType: 'filter-category',
    targetValue: 'beaches'
  },
  {
    id: 'budget-lisbon',
    title: '7. Lisbon on a Budget',
    description: 'Find affordable food, attractions and experiences.',
    icon: Euro,
    image: '/images/time-out-market.jpg',
    badge: 'Under €10',
    actionType: 'filter-budget',
    targetValue: 'under10'
  },
  {
    id: 'museums-culture',
    title: '8. Museums and Culture',
    description: 'Explore museums, exhibitions, architecture and cultural landmarks.',
    icon: Palette,
    image: '/images/museu-azulejo.jpg',
    badge: 'Art & Heritage',
    actionType: 'filter-category',
    targetValue: 'culture'
  },
  {
    id: 'romantic-lisbon',
    title: '9. Romantic Lisbon',
    description: 'Discover scenic viewpoints, special dinners and experiences for couples.',
    icon: Heart,
    image: '/images/miradouro-santa-luzia.jpg',
    badge: 'For Couples',
    actionType: 'filter-category',
    targetValue: 'romantic'
  },
  {
    id: 'lisbon-kids',
    title: '10. Lisbon with Kids',
    description: 'Find family-friendly attractions, parks and activities.',
    icon: Smile,
    image: '/images/oceanario.jpg',
    badge: 'Family Safe',
    actionType: 'filter-family',
    targetValue: 'family'
  },
  {
    id: 'day-trips',
    title: '11. Day Trips',
    description: 'Explore Sintra, Cascais, Cabo da Roca, Évora and other destinations.',
    icon: Map,
    image: '/images/palacio-pena.jpg',
    badge: 'Sintra & Beyond',
    actionType: 'filter-category',
    targetValue: 'daytrips'
  },
  {
    id: 'getting-around',
    title: '12. Getting Around',
    description: 'Find practical information about the airport, metro, buses, trams, trains, ferries and other transport options.',
    icon: Train,
    image: '/images/eletrico-28.jpg',
    badge: 'Airport & Transit',
    actionType: 'open-transport',
    targetValue: 'transport'
  }
];

export const WhatToDoGrid: React.FC<WhatToDoGridProps> = ({ currentLang, onCardSelect }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="what-to-do" className="py-12 bg-white/70 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1.5">
              <span>Immediate Suggestions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B192C]">
              {t.whatWouldYouLikeToDo}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 max-w-md">
            Click any suggestion below to filter verified recommendations or initiate tailored AI exploration.
          </p>
        </div>

        {/* 12 Clickable Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {CARDS.map((card) => {
            const Icon = card.icon;
            const localized = LOCALIZED_CARDS[currentLang]?.[card.id] || LOCALIZED_CARDS['en'][card.id] || card;
            const title = localized.title;
            const description = localized.description;
            const badge = localized.badge;

            return (
              <button
                key={card.id}
                type="button"
                onClick={() => onCardSelect(card.actionType, card.targetValue)}
                className="group text-left bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-[#C85A32]/40 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image Header with Badge */}
                <div className="relative h-40 w-full overflow-hidden bg-stone-100">
                  <img
                    src={card.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-[#0B192C]/85 backdrop-blur-xs text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                    {badge}
                  </span>

                  {/* Icon Circle */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/95 text-[#C85A32] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 group-hover:text-[#C85A32] text-base transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0B192C] group-hover:text-[#C85A32]">
                    <span>Explore category</span>
                    <span className="text-stone-400 group-hover:translate-x-1 group-hover:text-[#C85A32] transition-transform">→</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
