import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatToDoGrid } from './components/WhatToDoGrid';
import { FiltersBar } from './components/FiltersBar';
import { DiscoveryDirectory } from './components/DiscoveryDirectory';
import { AskLisbonAI } from './components/AskLisbonAI';
import { BudgetPlanner } from './components/BudgetPlanner';
import { ShortStays } from './components/ShortStays';
import { NeighbourhoodGuide } from './components/NeighbourhoodGuide';
import { TransportGuide } from './components/TransportGuide';
import { LisbonMap } from './components/LisbonMap';
import { CreatorTeaser } from './components/CreatorTeaser';
import { AboutCreator } from './components/AboutCreator';
import { Footer } from './components/Footer';
import { PortugueseGuitarPlayer } from './components/PortugueseGuitarPlayer';

import { LISBON_SPOTS } from './data/lisbonData';
import { getLocalizedSpots } from './i18n/contentLocalization';
import { FilterState, SupportedLanguage, LisbonSpot } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('en');
  const [initialAiPrompt, setInitialAiPrompt] = useState<string | undefined>(undefined);

  // Filters State
  const initialFilters: FilterState = {
    searchQuery: '',
    category: 'all',
    budget: 'all',
    interest: 'all',
    timeAvailable: 'all',
    neighbourhood: 'all',
    indoorOnly: false,
    outdoorOnly: false,
    familyFriendlyOnly: false,
    accessibleOnly: false,
    transitAccessibleOnly: false,
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  // Synchronize document language, direction (RTL for Arabic), and canonical tag
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLang]);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Localized spots based on current selected language
  const localizedSpots = useMemo(() => {
    return getLocalizedSpots(currentLang);
  }, [currentLang]);

  // Filtered spots calculation
  const filteredSpots = useMemo(() => {
    return localizedSpots.filter((spot: LisbonSpot) => {
      // Search query filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = spot.name.toLowerCase().includes(query);
        const matchesDesc = spot.shortDescription.toLowerCase().includes(query) || spot.fullDescription.toLowerCase().includes(query);
        const matchesNeighbourhood = spot.neighbourhood.toLowerCase().includes(query);
        const matchesTags = spot.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesNeighbourhood && !matchesTags) {
          return false;
        }
      }

      // Budget filter
      if (filters.budget !== 'all') {
        if (filters.budget === 'free' && spot.verificationStatus !== 'free' && spot.priceNum !== 0) {
          return false;
        }
        if (filters.budget === 'under10' && spot.priceNum > 10) {
          return false;
        }
        if (filters.budget === '10-20' && (spot.priceNum <= 0 || spot.priceNum > 20)) {
          return false;
        }
        if (filters.budget === '20-50' && (spot.priceNum < 20 || spot.priceNum > 50)) {
          return false;
        }
        if (filters.budget === 'premium' && spot.priceNum <= 50) {
          return false;
        }
      }

      // Interest filter
      if (filters.interest !== 'all') {
        if (spot.category !== filters.interest) {
          return false;
        }
      }

      // Time Available filter
      if (filters.timeAvailable !== 'all') {
        if (spot.duration !== filters.timeAvailable) {
          return false;
        }
      }

      // Neighbourhood filter
      if (filters.neighbourhood !== 'all') {
        if (spot.neighbourhood !== filters.neighbourhood) {
          return false;
        }
      }

      // Indoor / Outdoor filters
      if (filters.indoorOnly && spot.setting === 'outdoor') {
        return false;
      }
      if (filters.outdoorOnly && spot.setting === 'indoor') {
        return false;
      }

      // Checkbox filters
      if (filters.familyFriendlyOnly && !spot.familyFriendly) {
        return false;
      }
      if (filters.accessibleOnly && !spot.accessible) {
        return false;
      }
      if (filters.transitAccessibleOnly && !spot.metroAccessible) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Handler for What To Do card clicks
  const handleWhatToDoCardSelect = (actionType: string, targetValue: string) => {
    if (actionType === 'filter-category') {
      setFilters({ ...initialFilters, interest: targetValue });
      scrollToSection('directory');
    } else if (actionType === 'filter-budget') {
      setFilters({ ...initialFilters, budget: targetValue });
      scrollToSection('directory');
    } else if (actionType === 'filter-free') {
      setFilters({ ...initialFilters, budget: 'free' });
      scrollToSection('directory');
    } else if (actionType === 'filter-family') {
      setFilters({ ...initialFilters, familyFriendlyOnly: true });
      scrollToSection('directory');
    } else if (actionType === 'open-transport') {
      scrollToSection('transport');
    } else if (actionType === 'open-ai') {
      setInitialAiPrompt(targetValue);
      scrollToSection('ask-ai');
    }
  };

  const handleAskAboutSpot = (spotName: string) => {
    setInitialAiPrompt(`Tell me more practical advice, best time to visit, and nearby recommendations for ${spotName}.`);
    scrollToSection('ask-ai');
  };

  const handleCustomizeShortStayWithAI = (planTitle: string) => {
    setInitialAiPrompt(`Can you help me customize the "${planTitle}" plan according to my preferences and pace?`);
    scrollToSection('ask-ai');
  };

  const handleSelectNeighbourhoodFilter = (neighbourhoodName: string) => {
    setFilters({ ...initialFilters, neighbourhood: neighbourhoodName });
    scrollToSection('directory');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900">
      
      {/* Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onNavigate={scrollToSection}
      />

      {/* Main Semantic Landmark for Accessibility & SEO */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
          onExploreClick={() => scrollToSection('what-to-do')}
          onAskAiClick={() => scrollToSection('ask-ai')}
          totalSpotsCount={LISBON_SPOTS.length}
        />

        {/* Section: What Would You Like to Do? (The 12 Functional Cards) */}
        <WhatToDoGrid
          currentLang={currentLang}
          onCardSelect={handleWhatToDoCardSelect}
        />

        {/* Quick Discovery Filters */}
        <FiltersBar
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={() => setFilters(initialFilters)}
          currentLang={currentLang}
          totalFilteredCount={filteredSpots.length}
        />

        {/* Complete Lisbon Discovery Directory */}
        <DiscoveryDirectory
          spots={filteredSpots}
          currentLang={currentLang}
          onAskAboutSpot={handleAskAboutSpot}
        />

        {/* Dedicated Section: Make the Most of Your Time (Short Stays) */}
        <ShortStays
          currentLang={currentLang}
          onCustomizeWithAI={handleCustomizeShortStayWithAI}
        />

        {/* Prices & Interactive Budget Planner */}
        <BudgetPlanner
          currentLang={currentLang}
          onExplorePlanCategory={(category) => {
            setFilters({ ...initialFilters, interest: category });
            scrollToSection('directory');
          }}
        />

        {/* Neighbourhoods Explorer */}
        <NeighbourhoodGuide
          currentLang={currentLang}
          onSelectNeighbourhood={handleSelectNeighbourhoodFilter}
        />

        {/* Transport & Airport Transfers Guide */}
        <TransportGuide currentLang={currentLang} />

        {/* Interactive Geographical Map */}
        <LisbonMap
          spots={filteredSpots}
          currentLang={currentLang}
          onSpotSelect={handleAskAboutSpot}
        />

        {/* "Ask Lisbon AI" Conversational Terminal */}
        <AskLisbonAI
          currentLang={currentLang}
          initialPrompt={initialAiPrompt}
          onClearInitialPrompt={() => setInitialAiPrompt(undefined)}
          onOpenMap={() => scrollToSection('map-view')}
        />

        {/* Homepage Short Personal Message (Teaser) */}
        <CreatorTeaser
          currentLang={currentLang}
          onMeetCreator={() => scrollToSection('about-creator')}
        />

        {/* Dedicated "About the Creator" Section */}
        <AboutCreator
          currentLang={currentLang}
          onBackToExplore={() => scrollToSection('what-to-do')}
        />

      </main>

      {/* Footer (includes 'Built by AhnaX · WebSubmit 2026') */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onNavigate={scrollToSection}
      />

      {/* Persistent Portuguese Guitar Audio Experience with ON/OFF switch & interactive instrument */}
      <PortugueseGuitarPlayer currentLang={currentLang} />

    </div>
  );
}
