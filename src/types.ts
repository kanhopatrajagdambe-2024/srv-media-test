export interface FormState {
  parentName: string;
  phone: string;
  grade: string;
}

export interface FormErrors {
  parentName?: string;
  phone?: string;
  grade?: string;
}

export interface School {
  id: string;
  name: string;
  location: string;
  logo: string;
  tag?: string;
  curriculum?: string;
  category?: 'international' | 'cbse' | 'boarding';
  badgeColor?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconType: 'heads' | 'curriculum' | 'offers' | 'infrastructure' | 'guidance';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface HeroSlide {
  id: string;
  title: string;
  highlightText: string;
  subtitle: string;
  venue: string;
  date: string;
  time: string;
  images: string[];
}
