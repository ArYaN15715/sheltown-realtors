export interface Contact {
  id: bigint;
  name: string;
  requirement: string;
  timestamp: bigint;
  phone: string;
}

export type SearchType = "Buy" | "Invest" | "Finance";

export interface SearchFilters {
  type: SearchType;
  location: string;
  budget: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  pricePerSqft?: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  badge?: string;
  image: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
