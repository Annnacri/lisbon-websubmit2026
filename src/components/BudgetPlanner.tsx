import React, { useState } from 'react';
import { Euro, Calculator, CheckCircle2, AlertCircle, Sparkles, Navigation, Train, Utensils, Landmark } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface BudgetPlannerProps {
  currentLang: SupportedLanguage;
  onExplorePlanCategory: (category: string) => void;
}

interface BudgetItem {
  title: string;
  category: 'transit' | 'food' | 'activity' | 'viewpoint';
  cost: number;
  costLabel: string;
  status: 'verified' | 'estimate' | 'free';
  source: string;
  tip: string;
}

export const BudgetPlanner: React.FC<BudgetPlannerProps> = ({
  currentLang,
  onExplorePlanCategory,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [budgetAmount, setBudgetAmount] = useState<number>(35);
  const [includeFood, setIncludeFood] = useState(true);
  const [includeSightseeing, setIncludeSightseeing] = useState(true);
  const [includeTransport, setIncludeTransport] = useState(true);

  // Generate responsive recommendations based on user's target budget
  const calculatePlan = (): { items: BudgetItem[]; totalCost: number } => {
    const items: BudgetItem[] = [];
    let total = 0;

    // Transport allocation
    if (includeTransport) {
      if (budgetAmount <= 20) {
        // Zapping or 2 single metro trips
        items.push({
          title: 'Metro / Carris Single Fares (2 trips via Zapping card)',
          category: 'transit',
          cost: 3.20,
          costLabel: '€3.20',
          status: 'verified',
          source: 'Metropolitano de Lisboa official fare table',
          tip: 'Load Zapping credit on your Navegante card (€1.61 per ride vs €1.80 onboard).'
        });
        total += 3.20;
      } else {
        // 24-hour unlimited pass
        items.push({
          title: 'Navegante 24-Hour Unlimited Pass (Metro + Bus + Historic Trams + Funiculars)',
          category: 'transit',
          cost: 6.80,
          costLabel: '€6.80',
          status: 'verified',
          source: 'Carris / Metro de Lisboa official 2026 tariff',
          tip: 'Valid for exactly 24 hours from first validation. Covers famous Tram 28 and Elevador da Glória!'
        });
        total += 6.80;
      }
    }

    // Food allocation
    if (includeFood) {
      if (budgetAmount < 25) {
        items.push({
          title: 'Breakfast: Pastel de Nata & Espresso (Bica)',
          category: 'food',
          cost: 2.20,
          costLabel: '€2.20',
          status: 'verified',
          source: 'Manteigaria / local pastelarias in Baixa',
          tip: 'Order at the counter ("ao balcão") for the standard local price.'
        });
        total += 2.20;

        items.push({
          title: 'Lunch: Traditional Garlic Pork Bifana at O Trevo',
          category: 'food',
          cost: 4.30,
          costLabel: '€4.30',
          status: 'verified',
          source: 'O Trevo (Praça Luís de Camões)',
          tip: 'Includes an imperial draft beer or mineral water.'
        });
        total += 4.30;
      } else if (budgetAmount <= 50) {
        items.push({
          title: 'Breakfast: Warm Custard Tart & Galão coffee in Chiado',
          category: 'food',
          cost: 2.50,
          costLabel: '€2.50',
          status: 'verified',
          source: 'Chiado bakeries',
          tip: 'A galão is espresso with hot milk in a tall glass.'
        });
        total += 2.50;

        items.push({
          title: 'Lunch: "Prato do Dia" at a traditional neighbourhood Tasca',
          category: 'food',
          cost: 9.50,
          costLabel: '€9.50',
          status: 'estimate',
          source: 'Verified tascas in Graça & Mouraria',
          tip: 'Daily dish typically includes fresh grilled fish or Chanfana, bread, and olives.'
        });
        total += 9.50;

        items.push({
          title: 'Late Afternoon: Sour Cherry Ginjinha in chocolate cup or glass',
          category: 'food',
          cost: 1.50,
          costLabel: '€1.50',
          status: 'verified',
          source: 'A Ginjinha (Rossio)',
          tip: 'Historic tavern open since 1840.'
        });
        total += 1.50;
      } else {
        // Generous budget
        items.push({
          title: 'Breakfast: Specialty coffee & artisanal pastry in Príncipe Real',
          category: 'food',
          cost: 5.50,
          costLabel: '€5.50',
          status: 'estimate',
          source: 'Príncipe Real cafés',
          tip: 'Try Portuguese sourdough toast with local Azores cheese.'
        });
        total += 5.50;

        items.push({
          title: 'Lunch: Fresh Grilled Robalo (Sea Bass) with Boiled Potatoes & Salad',
          category: 'food',
          cost: 15.00,
          costLabel: '€15.00',
          status: 'estimate',
          source: 'Traditional seafood taverns',
          tip: 'Ask to see the fresh catch of the day on ice before ordering.'
        });
        total += 15.00;

        items.push({
          title: 'Dinner: Petiscos Sharing Platter & Vinho Verde',
          category: 'food',
          cost: 22.00,
          costLabel: '€22.00',
          status: 'estimate',
          source: 'Time Out Market / Bairro Alto tascas',
          tip: 'Amêijoas à Bulhão Pato (garlic clams) and chouriço assado.'
        });
        total += 22.00;
      }
    }

    // Sightseeing allocation
    if (includeSightseeing) {
      // Always include free viewpoints
      items.push({
        title: 'Miradouro da Senhora do Monte & Santa Luzia Panoramic Walk',
        category: 'viewpoint',
        cost: 0,
        costLabel: 'Free',
        status: 'free',
        source: 'Public viewpoint',
        tip: 'Best sunset in the city with views over the Castle and River Tagus.'
      });

      items.push({
        title: 'Hidden Moorish Courtyard at Casa do Alentejo',
        category: 'activity',
        cost: 0,
        costLabel: 'Free',
        status: 'free',
        source: 'Casa do Alentejo (Public open courtyard)',
        tip: 'A neo-Moorish architectural jewel hidden right off Rossio.'
      });

      // If budget allows, add paid admission
      if (budgetAmount >= 35 && budgetAmount < 60) {
        items.push({
          title: 'National Tile Museum (Museu Nacional do Azulejo) or Belém Tower',
          category: 'activity',
          cost: 8.00,
          costLabel: '€8.00',
          status: 'verified',
          source: 'Museu Nacional do Azulejo official ticket',
          tip: 'Includes the famous 23m panorama of Lisbon prior to 1755.'
        });
        total += 8.00;
      } else if (budgetAmount >= 60) {
        items.push({
          title: 'São Jorge Castle (Castelo de São Jorge) Ramparts Entry',
          category: 'activity',
          cost: 15.00,
          costLabel: '€15.00',
          status: 'verified',
          source: 'Castelo de São Jorge official box office',
          tip: 'Book online to skip ticket queue at the gate.'
        });
        total += 15.00;
      }
    }

    return { items, totalCost: total };
  };

  const { items: planItems, totalCost } = calculatePlan();
  const remaining = budgetAmount - totalCost;

  return (
    <section id="budget-planner" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#0B192C] text-xs font-semibold mb-2">
            <Euro className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B192C]">
            {t.budgetPlannerTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 mt-1.5">
            {t.budgetPlannerSubtitle}
          </p>
        </div>

        {/* Calculator Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 rounded-2xl border border-stone-300 shadow-xs space-y-6">
            
            {/* Slider & Presets */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  {t.dailyBudget}
                </label>
                <span className="font-display font-extrabold text-2xl text-[#C85A32]">
                  €{budgetAmount}
                </span>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-[#C85A32]"
              />

              {/* Budget Quick Preset Buttons */}
              <div className="grid grid-cols-4 gap-1.5 mt-3">
                {[20, 35, 60, 100].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setBudgetAmount(val)}
                    className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      budgetAmount === val
                        ? 'bg-[#0B192C] text-white border-[#0B192C]'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    €{val}
                  </button>
                ))}
              </div>
            </div>

            {/* Inclusions Toggle Checkboxes */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                Included in Your Day:
              </span>

              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-amber-400">
                <div className="flex items-center gap-2.5">
                  <Utensils className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-semibold text-slate-800">Food & Portuguese Meals</span>
                </div>
                <input
                  type="checkbox"
                  checked={includeFood}
                  onChange={(e) => setIncludeFood(e.target.checked)}
                  className="rounded text-[#C85A32] focus:ring-[#C85A32]"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-amber-400">
                <div className="flex items-center gap-2.5">
                  <Landmark className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-semibold text-slate-800">Sightseeing & Admissions</span>
                </div>
                <input
                  type="checkbox"
                  checked={includeSightseeing}
                  onChange={(e) => setIncludeSightseeing(e.target.checked)}
                  className="rounded text-[#C85A32] focus:ring-[#C85A32]"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-amber-400">
                <div className="flex items-center gap-2.5">
                  <Train className="w-4 h-4 text-blue-700" />
                  <span className="text-xs font-semibold text-slate-800">Public Transport Passes</span>
                </div>
                <input
                  type="checkbox"
                  checked={includeTransport}
                  onChange={(e) => setIncludeTransport(e.target.checked)}
                  className="rounded text-[#C85A32] focus:ring-[#C85A32]"
                />
              </label>
            </div>

            {/* Clear Mandatory Disclaimer Note from Section 6 */}
            <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-300 text-xs text-amber-900 flex items-start gap-2 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Official Note:</strong> {t.budgetDisclaimer}
              </span>
            </div>

          </div>

          {/* Right Results Breakdown Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Summary Ribbon */}
            <div className="p-4 rounded-2xl bg-[#0B192C] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold">
                  Estimated Day Breakdown
                </span>
                <div className="text-xl font-bold font-display mt-0.5">
                  Total Calculated: €{totalCost.toFixed(2)}
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-stone-300">Remaining Margin</span>
                <div className={`text-base font-bold ${remaining >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {remaining >= 0 ? `+€${remaining.toFixed(2)} under budget` : `€${Math.abs(remaining).toFixed(2)} over budget`}
                </div>
              </div>
            </div>

            {/* Itemized List */}
            <div className="space-y-3">
              {planItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-white hover:border-amber-300 shadow-2xs transition-all space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {item.title}
                    </h4>
                    <span className="font-bold text-sm text-[#0B192C] bg-stone-100 px-2.5 py-0.5 rounded-md shrink-0">
                      {item.costLabel}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600">
                    <strong className="text-amber-800">Tip:</strong> {item.tip}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-stone-600">
                    <span className="italic">Source: {item.source}</span>
                    <span
                      className={`font-semibold px-2 py-0.5 rounded-md ${
                        item.status === 'free'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.status === 'verified'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.status === 'free' ? 'Free Activity' : item.status === 'verified' ? 'Verified Published Fare' : 'Indicative Estimate'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => onExplorePlanCategory('food')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C85A32] hover:text-[#0B192C] transition-colors"
              >
                <span>Browse all affordable food & tascas in Lisbon directory</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
