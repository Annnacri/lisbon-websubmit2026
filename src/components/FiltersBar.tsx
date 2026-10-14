import React from 'react';
import { Search, RotateCcw, Filter, MapPin, Check } from 'lucide-react';
import { FilterState, SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { LISBON_NEIGHBOURHOODS } from '../data/lisbonData';

interface FiltersBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  currentLang: SupportedLanguage;
  totalFilteredCount: number;
}

const getBudgetOptions = (lang: SupportedLanguage) => {
  const labels: Record<SupportedLanguage, Record<string, string>> = {
    en: { all: 'All Budgets', free: 'Free (€0)', under10: 'Under €10', '10-20': '€10–€20', '20-50': '€20–€50', premium: 'Premium' },
    pt: { all: 'Qualquer Orçamento', free: 'Gratuito (€0)', under10: 'Menos de €10', '10-20': '€10–€20', '20-50': '€20–€50', premium: 'Premium' },
    es: { all: 'Cualquier Presupuesto', free: 'Gratis (€0)', under10: 'Menos de 10 €', '10-20': '10–20 €', '20-50': '20–50 €', premium: 'Premium' },
    de: { all: 'Jedes Budget', free: 'Kostenlos (€0)', under10: 'Unter 10 €', '10-20': '10–20 €', '20-50': '20–50 €', premium: 'Premium' },
    fr: { all: 'Tout Budget', free: 'Gratuit (€0)', under10: 'Moins de 10 €', '10-20': '10–20 €', '20-50': '20–50 €', premium: 'Premium' },
    it: { all: 'Tutti i Budget', free: 'Gratuito (€0)', under10: 'Meno di 10 €', '10-20': '10–20 €', '20-50': '20–50 €', premium: 'Premium' },
    ar: { all: 'أي ميزانية', free: 'مجاناً', under10: 'أقل من 10 يورو', '10-20': '10–20 يورو', '20-50': '20–50 يورو', premium: 'فاخر' }
  };
  const map = labels[lang] || labels.en;
  return [
    { value: 'all', label: map.all },
    { value: 'free', label: map.free },
    { value: 'under10', label: map.under10 },
    { value: '10-20', label: map['10-20'] },
    { value: '20-50', label: map['20-50'] },
    { value: 'premium', label: map.premium },
  ];
};

const getInterestOptions = (lang: SupportedLanguage) => {
  const labels: Record<SupportedLanguage, Record<string, string>> = {
    en: { all: 'All Interests', food: 'Food and drink', attractions: 'Culture & sightseeing', nightlife: 'Nightlife & parties', shopping: 'Shopping', beaches: 'Nature & beaches', family: 'Family activities', romantic: 'Romantic experiences', gems: 'Local experiences / Gems', daytrips: 'Day trips' },
    pt: { all: 'Todos os Interesses', food: 'Comida e bebida', attractions: 'Cultura e monumentos', nightlife: 'Vida noturna', shopping: 'Compras', beaches: 'Natureza e praias', family: 'Para famílias', romantic: 'Experiências românticas', gems: 'Segredos e locais autênticos', daytrips: 'Passeios de 1 dia' },
    es: { all: 'Todos los Intereses', food: 'Comida y bebida', attractions: 'Cultura y monumentos', nightlife: 'Vida nocturna', shopping: 'Compras', beaches: 'Naturaleza y playas', family: 'Actividades en familia', romantic: 'Experiencias románticas', gems: 'Tesoros locales', daytrips: 'Excursiones de un día' },
    de: { all: 'Alle Interessen', food: 'Essen & Trinken', attractions: 'Kultur & Sehenswürdigkeiten', nightlife: 'Nachtleben & Bars', shopping: 'Shopping', beaches: 'Natur & Strände', family: 'Familienaktivitäten', romantic: 'Romantische Erlebnisse', gems: 'Geheimtipps & Authentisch', daytrips: 'Tagesausflüge' },
    fr: { all: 'Tous Centres d’intérêt', food: 'Gastronomie & boissons', attractions: 'Culture & monuments', nightlife: 'Vie nocturne', shopping: 'Shopping', beaches: 'Nature & plages', family: 'Activités famille', romantic: 'Romantique', gems: 'Pépites locales', daytrips: 'Excursions d’un jour' },
    it: { all: 'Tutti gli Interessi', food: 'Cibo e bevande', attractions: 'Cultura e monumenti', nightlife: 'Vita notturna', shopping: 'Shopping', beaches: 'Natura e spiagge', family: 'Attività per famiglie', romantic: 'Esperienze romantiche', gems: 'Gioielli locali', daytrips: 'Gite in giornata' },
    ar: { all: 'جميع الاهتمامات', food: 'المأكولات والمشروبات', attractions: 'الثقافة والمعالم', nightlife: 'السهرات المسائية', shopping: 'التسوق', beaches: 'الطبيعة والشواطئ', family: 'أنشطة عائلية', romantic: 'تجارب رومانسية', gems: 'تجارب محلية أصيلة', daytrips: 'رحلات اليوم الواحد' }
  };
  const map = labels[lang] || labels.en;
  return [
    { value: 'all', label: map.all },
    { value: 'food', label: map.food },
    { value: 'attractions', label: map.attractions },
    { value: 'nightlife', label: map.nightlife },
    { value: 'shopping', label: map.shopping },
    { value: 'beaches', label: map.beaches },
    { value: 'family', label: map.family },
    { value: 'romantic', label: map.romantic },
    { value: 'gems', label: map.gems },
    { value: 'daytrips', label: map.daytrips },
  ];
};

const getTimeOptions = (lang: SupportedLanguage) => {
  const labels: Record<SupportedLanguage, Record<string, string>> = {
    en: { all: 'Any time', '1-2h': '1–2 hours', 'half-day': 'Half a day', 'full-day': 'One full day', 'multi-day': 'Two or three days' },
    pt: { all: 'Qualquer duração', '1-2h': '1–2 horas', 'half-day': 'Meio dia', 'full-day': 'Um dia inteiro', 'multi-day': 'Dois ou três dias' },
    es: { all: 'Cualquier duración', '1-2h': '1–2 horas', 'half-day': 'Medio día', 'full-day': 'Un día entero', 'multi-day': 'Dos o tres días' },
    de: { all: 'Jede Dauer', '1-2h': '1–2 Stunden', 'half-day': 'Halber Tag', 'full-day': 'Ganzer Tag', 'multi-day': 'Zwei bis drei Tage' },
    fr: { all: 'Toute durée', '1-2h': '1–2 heures', 'half-day': 'Demi-journée', 'full-day': 'Une journée entière', 'multi-day': 'Deux ou trois jours' },
    it: { all: 'Qualsiasi durata', '1-2h': '1–2 ore', 'half-day': 'Mezza giornata', 'full-day': 'Un giorno intero', 'multi-day': 'Due o tre giorni' },
    ar: { all: 'أي مدة', '1-2h': '1–2 ساعة', 'half-day': 'نصف يوم', 'full-day': 'يوم كامل', 'multi-day': 'يومان أو ثلاثة' }
  };
  const map = labels[lang] || labels.en;
  return [
    { value: 'all', label: map.all },
    { value: '1-2h', label: map['1-2h'] },
    { value: 'half-day', label: map['half-day'] },
    { value: 'full-day', label: map['full-day'] },
    { value: 'multi-day', label: map['multi-day'] },
  ];
};

export const FiltersBar: React.FC<FiltersBarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  currentLang,
  totalFilteredCount,
}) => {
  const t = TRANSLATIONS[currentLang];

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.budget !== 'all' ||
    filters.interest !== 'all' ||
    filters.timeAvailable !== 'all' ||
    filters.neighbourhood !== 'all' ||
    filters.indoorOnly ||
    filters.outdoorOnly ||
    filters.familyFriendlyOnly ||
    filters.accessibleOnly ||
    filters.transitAccessibleOnly;

  return (
    <div id="filters" className="bg-[#FAF7F2] py-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        
        {/* Top Header & Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#C85A32]" />
            <h2 className="text-xl font-bold font-display text-[#0B192C]">
              {t.filtersTitle}
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-200/80 text-stone-700">
              {totalFilteredCount} {t.placesFound}
            </span>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={handleTextChange}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm placeholder:text-stone-500 focus:outline-hidden focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Primary Filter Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          {/* Budget Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
              {t.budgetLabel}
            </label>
            <select
              value={filters.budget}
              onChange={(e) => onFilterChange({ ...filters, budget: e.target.value })}
              className="w-full bg-white border border-stone-300 text-slate-800 text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:border-[#C85A32] shadow-2xs"
            >
              {getBudgetOptions(currentLang).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Interests Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
              {t.interestLabel}
            </label>
            <select
              value={filters.interest}
              onChange={(e) => onFilterChange({ ...filters, interest: e.target.value })}
              className="w-full bg-white border border-stone-300 text-slate-800 text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:border-[#C85A32] shadow-2xs"
            >
              {getInterestOptions(currentLang).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Available Time Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide">
              {t.timeAvailableLabel}
            </label>
            <select
              value={filters.timeAvailable}
              onChange={(e) => onFilterChange({ ...filters, timeAvailable: e.target.value })}
              className="w-full bg-white border border-stone-300 text-slate-800 text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:border-[#C85A32] shadow-2xs"
            >
              {getTimeOptions(currentLang).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Neighbourhood Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wide flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-stone-500" />
              <span>{currentLang === 'pt' ? 'Bairro' : currentLang === 'es' ? 'Barrio' : currentLang === 'de' ? 'Stadtteil' : currentLang === 'fr' ? 'Quartier' : currentLang === 'it' ? 'Quartiere' : 'Neighbourhood'}</span>
            </label>
            <select
              value={filters.neighbourhood}
              onChange={(e) => onFilterChange({ ...filters, neighbourhood: e.target.value })}
              className="w-full bg-white border border-stone-300 text-slate-800 text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:border-[#C85A32] shadow-2xs"
            >
              <option value="all">All Neighbourhoods</option>
              {LISBON_NEIGHBOURHOODS.map((n) => (
                <option key={n.id} value={n.name}>
                  {n.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Toggle Pills & Clear Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          
          <div className="flex flex-wrap items-center gap-2">
            {/* Indoor Button */}
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, indoorOnly: !filters.indoorOnly, outdoorOnly: false })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                filters.indoorOnly
                  ? 'bg-[#0B192C] text-white border-[#0B192C]'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
            >
              {filters.indoorOnly && <Check className="w-3 h-3 text-amber-400" />}
              <span>{t.indoorOnly}</span>
            </button>

            {/* Outdoor Button */}
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, outdoorOnly: !filters.outdoorOnly, indoorOnly: false })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                filters.outdoorOnly
                  ? 'bg-[#0B192C] text-white border-[#0B192C]'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
            >
              {filters.outdoorOnly && <Check className="w-3 h-3 text-amber-400" />}
              <span>{t.outdoorOnly}</span>
            </button>

            {/* Family-Friendly */}
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, familyFriendlyOnly: !filters.familyFriendlyOnly })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                filters.familyFriendlyOnly
                  ? 'bg-[#0B192C] text-white border-[#0B192C]'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
            >
              {filters.familyFriendlyOnly && <Check className="w-3 h-3 text-amber-400" />}
              <span>{t.familyFriendly}</span>
            </button>

            {/* Accessible */}
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, accessibleOnly: !filters.accessibleOnly })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                filters.accessibleOnly
                  ? 'bg-[#0B192C] text-white border-[#0B192C]'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
            >
              {filters.accessibleOnly && <Check className="w-3 h-3 text-amber-400" />}
              <span>{t.accessible}</span>
            </button>

            {/* Metro Accessible */}
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, transitAccessibleOnly: !filters.transitAccessibleOnly })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                filters.transitAccessibleOnly
                  ? 'bg-[#0B192C] text-white border-[#0B192C]'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
            >
              {filters.transitAccessibleOnly && <Check className="w-3 h-3 text-amber-400" />}
              <span>{t.metroAccessible}</span>
            </button>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.clearFilters}</span>
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
