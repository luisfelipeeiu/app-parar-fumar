// Tipos TypeScript do aplicativo

export type Screen = "dashboard" | "daily-plan" | "profile" | "premium" | "history";

export interface UserProfile {
  quitDate: string;
  cigarettes_per_day: number;
  price_per_pack: number;
  cigarettes_per_pack: number;
  currencySymbol: string;
  lastCigaretteTime: string;
  isPremium: boolean; // Status premium do usuário
}

export interface Statistics {
  daysWithoutSmoking: number;
  timeSinceLastCigarette: string;
  moneySaved: number;
  cigarettesAvoided: number;
  healthProgress: number;
  progressPercentage: number;
  dailyCost: number;
}

export interface DayRecord {
  date: string;
  success: boolean;
}

export interface OnboardingData {
  smokingYears: number;
  cigarettesPerDay: number;
  pricePerPack: number;
  startDate: string;
}
