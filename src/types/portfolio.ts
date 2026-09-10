export interface Profile {
  name: string;
  professionalTitle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  profileImage?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
}

export interface AboutItem {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  institution: string;
  date: string;
  description: string;
  url?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  cvPath: string;
  navLinks: { label: string; href: string }[];
}

export interface Portfolio {
  profile: Profile;
  about: {
    introduction: string;
    items: AboutItem[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  services: Service[];
  socialLinks: SocialLink[];
  settings: SiteSettings;
}
