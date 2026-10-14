export type CategoryType =
  | 'attractions'
  | 'food'
  | 'nightlife'
  | 'beaches'
  | 'culture'
  | 'shopping'
  | 'family'
  | 'romantic'
  | 'gems'
  | 'daytrips'
  | 'transport';

export type BudgetTier = 'free' | 'under10' | '10-20' | '20-50' | 'premium';
export type DurationTier = '1-2h' | 'half-day' | 'full-day' | 'multi-day';
export type VerificationStatus = 'verified' | 'estimate' | 'free';

export interface LisbonSpot {
  id: string;
  name: string;
  category: CategoryType;
  neighbourhood: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  priceNum: number; // numeric value for budget calculation (0 for free)
  priceType: BudgetTier;
  verificationStatus: VerificationStatus;
  duration: DurationTier;
  setting: 'indoor' | 'outdoor' | 'both';
  familyFriendly: boolean;
  accessible: boolean;
  metroAccessible: boolean;
  coordinates: [number, number]; // [lat, lng]
  imageUrl: string;
  officialUrl?: string;
  mapsUrl: string;
  transitAdvice: string;
  tips: string;
  openingHours?: string;
  tags: string[];
}

export interface FilterState {
  searchQuery: string;
  category: string;
  budget: string;
  interest: string;
  timeAvailable: string;
  neighbourhood: string;
  indoorOnly: boolean;
  outdoorOnly: boolean;
  familyFriendlyOnly: boolean;
  accessibleOnly: boolean;
  transitAccessibleOnly: boolean;
}

export type SupportedLanguage = 'en' | 'pt' | 'es' | 'fr' | 'de' | 'it' | 'ar';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isLiveAI?: boolean;
  source?: string;
  suggestedActions?: string[];
  spotCards?: LisbonSpot[];
}

export interface ShortStayPlan {
  id: string;
  title: string;
  badge: string;
  idealFor: string;
  duration: string;
  summary: string;
  highlights: string[];
  schedule: {
    time: string;
    action: string;
    location: string;
    cost: string;
    tip: string;
  }[];
  totalEstCost: string;
  transitSummary: string;
}
