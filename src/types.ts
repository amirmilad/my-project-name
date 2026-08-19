export type ProjectCategory = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL';

export interface UnitType {
  id: string;
  title: string;
  titleAr?: string;
  sizeRange: string;
  bedroomCount?: string;
  bedroomCountAr?: string;
  startingPrice?: string;
  startingPriceAr?: string;
  features: string[];
  featuresAr?: string[];
  image: string;
  floorPlanImage?: string;
}

export interface Project {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  category: 'RESIDENTIAL' | 'COMMERCIAL';
  categoryAr?: string;
  location: string;
  locationAr?: string;
  region: 'Cairo' | 'North Coast';
  regionAr?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  heroImage: string;
  gallery: string[];
  description: string;
  descriptionAr?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  tagline: string;
  taglineAr?: string;
  landArea: string;
  landAreaAr?: string;
  footprint: string;
  footprintAr?: string;
  status: 'Under Construction' | 'Delivered' | 'Launching Now' | 'Selling Fast' | 'New Launch' | 'Ready To Move (RTM)';
  statusAr?: string;
  startingPrice: string;
  startingPriceAr?: string;
  paymentPlan: string;
  paymentPlanAr?: string;
  deliveryDate: string;
  deliveryDateAr?: string;
  unitTypes: UnitType[];
  masterPlanImage: string;
  brochurePages: string[];
  highlights: string[];
  highlightsAr?: string[];
  nearbyLandmarks: { name: string; nameAr?: string; distance: string; distanceAr?: string }[];
  aboutProject?: {
    overview: string;
    locationDetails: string;
    masterPlanDetails: string;
    unitTypesDetails: string;
  };
  aboutProjectAr?: {
    overview: string;
    locationDetails: string;
    masterPlanDetails: string;
    unitTypesDetails: string;
  };
}

export interface ConstructionUpdate {
  id: string;
  projectId: string;
  projectName: string;
  projectNameAr?: string;
  title: string;
  titleAr?: string;
  date: string;
  quarter: string;
  completionPercentage: number;
  summary: string;
  summaryAr?: string;
  coverImage: string;
  images: string[];
  videoThumbnail?: string;
  details: string[];
  detailsAr?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  date: string;
  summary: string;
  summaryAr?: string;
  content: string;
  contentAr?: string;
  image: string;
  readTime: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  projectId: string;
  unitTypePreference?: string;
  budgetRange?: string;
  preferredContactMethod: 'phone' | 'whatsapp' | 'email';
  message?: string;
}
