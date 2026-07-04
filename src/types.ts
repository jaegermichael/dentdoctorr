export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  benefits: string[];
  iconName: string;
  imageUrl: string;
}

export interface BeforeAfterExample {
  id: string;
  title: string;
  vehicleType: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photoUrl: string;
  rating: number;
  vehicle: string;
  text: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AIAnalysisResult {
  isPdrCandidate: boolean;
  confidenceScore: number;
  damageSeverity: "Light" | "Moderate" | "Severe";
  estimatedCostMin: number;
  estimatedCostMax: number;
  estimatedTime: string;
  structuralAnalysis: string;
  recommendedAction: string;
  vehicleInfo?: string;
}
