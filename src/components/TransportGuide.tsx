import React from 'react';
import { 
  Plane, 
  Train, 
  Bus, 
  Ship, 
  CreditCard, 
  Footprints, 
  Car, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface TransportGuideProps {
  currentLang: SupportedLanguage;
}

export const TransportGuide: React.FC<TransportGuideProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="transport" className="py-12 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold mb-2">
            <Train className="w-3.5 h-3.5 text-blue-700" />
            <span>Practical Mobility Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0B192C]">
            {t.transportGuideTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 mt-1.5">
            Verified options for the airport, metro, historic trams, commuter trains, and the Navegante card.
          </p>
        </div>

        {/* Airport Transfers Spotlight Box */}
        <div className="bg-white rounded-2xl border border-stone-300 p-6 sm:p-8 shadow-sm mb-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-[#0B192C]">
                Lisbon Humberto Delgado Airport (LIS) Transfers
              </h3>
              <p className="text-xs sm:text-sm text-stone-700">
                The airport is located just 7km north of central Lisbon with direct underground connection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            {/* Metro */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Train className="w-4 h-4 text-rose-600" />
                  <span>Metro (Linha Vermelha)</span>
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  €1.80 / trip
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Direct underground station inside Terminal 1. Runs every 6–9 minutes (06:30 to 01:00).
              </p>
              <div className="text-[11px] text-stone-600 pt-1 border-t border-stone-200">
                <strong>Journey:</strong> ~25 min to Saldanha or São Sebastião; transfer to Blue/Green lines for Baixa.
              </div>
            </div>

            {/* Ride Hailing */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-slate-700" />
                  <span>Uber / Bolt Ride-Hailing</span>
                </span>
                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-md">
                  ~€9–€16
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Most practical with heavy luggage or families. Pickup zone is located at the Departures (Partidas) upper car park.
              </p>
              <div className="text-[11px] text-stone-600 pt-1 border-t border-stone-200">
                <strong>Journey:</strong> 20–30 min outside of morning/evening rush hours.
              </div>
            </div>

            {/* Aerotaxi */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-amber-700" />
                  <span>Official City Taxi</span>
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                  ~€15–€22
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Taxi rank directly outside Arrivals. Always ensure the driver activates the taximeter upon departure.
              </p>
              <div className="text-[11px] text-stone-600 pt-1 border-t border-stone-200">
                <strong>Note:</strong> Standard €1.60 luggage fee applies for bags in the trunk.
              </div>
            </div>

          </div>
        </div>

        {/* The Navegante Card Explained */}
        <div className="bg-white rounded-2xl border border-stone-300 p-6 sm:p-8 shadow-sm mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-[#0B192C]">
                The Navegante Card: Essential Local Transit Tip
              </h3>
              <p className="text-xs sm:text-sm text-stone-700">
                Do not pay on-board in cash! Cash fares are twice as expensive.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
              <span className="font-bold text-slate-900 block">1. Buy the Card (€0.50)</span>
              <p className="text-slate-600">
                Purchase the green paper Navegante Occasional Card at any Metro vending machine (English available).
              </p>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
              <span className="font-bold text-slate-900 block">2. Zapping Credit</span>
              <p className="text-slate-600">
                Load "Zapping" with €5, €10 or €15. Each metro/bus ride is discounted to €1.61, and suburban trains to €2.00.
              </p>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
              <span className="font-bold text-slate-900 block">3. 24-Hour Pass (€6.80)</span>
              <p className="text-slate-600">
                Best value for sightseeing days: unlimited Metro, Carris buses, historic trams (including 28), and funiculars for 24h.
              </p>
            </div>
          </div>
        </div>

        {/* Transit Modes Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Historic Trams */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-[#C85A32] font-bold text-sm">
              <Train className="w-4 h-4" />
              <span>Historic Trams (Elétricos)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Tram 28E:</strong> Martim Moniz → Graça → Alfama → Chiado → Estrela.<br />
              <strong>Tram 15E:</strong> Modern fast tram from Praça da Figueira to Belém monuments.
            </p>
            <div className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded-md">
              *Local Tip: Board Tram 28 at 08:00 or after 19:30 to avoid standing in huge tourist lines.
            </div>
          </div>

          {/* Suburban Trains */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
              <Train className="w-4 h-4" />
              <span>CP Suburban Trains</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>To Sintra:</strong> From Rossio Station (€2.40 each way, 40 min).<br />
              <strong>To Cascais & Beaches:</strong> From Cais do Sodré station (€2.40 each way, 33 min).
            </p>
            <div className="text-[11px] text-blue-900 bg-blue-50 p-2 rounded-md">
              Trains run every 15–20 minutes without needing advance seat reservations.
            </div>
          </div>

          {/* Ferries */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
              <Ship className="w-4 h-4" />
              <span>Transtejo River Ferries</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Cais do Sodré → Cacilhas:</strong> 10-minute scenic Tagus crossing (€1.45).<br />
              Takes you directly to famous riverside seafood restaurants (Ponto Final).
            </p>
            <div className="text-[11px] text-teal-900 bg-teal-50 p-2 rounded-md">
              Best cheap sunset boat ride in Lisbon for under €2!
            </div>
          </div>

          {/* Walking & Hills */}
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-800 font-bold text-sm">
              <Footprints className="w-4 h-4 text-[#C85A32]" />
              <span>Walking & Calçada</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lisbon is famous for its Seven Hills and traditional limestone cobblestone pavements (calçada portuguesa), which become very slick when wet or worn.
            </p>
            <div className="text-[11px] text-stone-700 bg-stone-100 p-2 rounded-md">
              Wear rubber-soled sneakers or flat walking shoes with good traction.
            </div>
          </div>

        </div>

        {/* Official Transit Links Banner */}
        <div className="mt-8 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Official transport operators:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.metrolisboa.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C85A32] font-semibold flex items-center gap-1"
            >
              <span>Metro de Lisboa</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.carris.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C85A32] font-semibold flex items-center gap-1"
            >
              <span>Carris (Buses & Trams)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.cp.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C85A32] font-semibold flex items-center gap-1"
            >
              <span>CP Comboios de Portugal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
