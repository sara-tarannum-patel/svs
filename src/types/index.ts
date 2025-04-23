export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedin?: string;
  department?: string;
}

export interface Partner {
  name: string;
  logo: string;
  type?: string;
  focus?: string;
  projects?: string[];
  collaboration?: string;
}

export interface Initiative {
  title: string;
  description: string;
  image: string;
  partners: string[];
}

export interface ImpactStat {
  number: string;
  label: string;
  description: string;
}

export interface SuccessStory {
  title: string;
  description: string;
  impact: string;
  image: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  title: string;
  email: string;
  phone: string;
  icon: React.ReactNode;
}

export interface SupportResource {
  title: string;
  description: string;
  link: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
} 