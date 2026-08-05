export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export type ProjectCategory = 'basic' | 'intermediate' | 'advanced';

export interface PortfolioItem {
  id: string;
  category: ProjectCategory;
  image: string;
  title: string;
  summary: string;
  languages: string[];
  viewLinkLabel: string;
  viewLinkUrl: string;
  demoTitle: string;
  demoVideo: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  timeFrame: string;
  tools: string[];
  responsibilities: string[];
}

export type FilterValue = 'all' | ProjectCategory;
