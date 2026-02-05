
export type Page = 'HOME' | 'SERVICES' | 'PORTFOLIO' | 'PRODUCTS' | 'TECH_LOG' | 'BLOG_POST' | 'CONTACT' | 'ADMIN';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  date: string;
  status: 'PENDING' | 'REPLIED' | 'COMPLETED';
}

export interface QuoteItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'ENGINEERING' | 'DESIGN' | 'INFRASTRUCTURE' | 'SaaS ARCHITECTURE';
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tech: string[];
}
