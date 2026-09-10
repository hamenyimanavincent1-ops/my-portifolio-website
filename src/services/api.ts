import { portfolio } from "@/data/portfolio";
import type {
  Profile,
  AboutItem,
  SkillCategory,
  Project,
  Experience,
  Education,
  Certification,
  Service,
  SocialLink,
  ContactMessage,
  SiteSettings,
} from "@/types/portfolio";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiFetch<T>(endpoint: string): Promise<T> {
  if (!API_URL) {
    throw new Error("API not configured");
  }
  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export const portfolioService = {
  async getProfile(): Promise<Profile> {
    if (!API_URL) return portfolio.profile;
    return apiFetch<Profile>("/api/profile");
  },

  async getAbout(): Promise<{ introduction: string; items: AboutItem[] }> {
    if (!API_URL) return portfolio.about;
    return apiFetch<{ introduction: string; items: AboutItem[] }>("/api/about");
  },

  async getSkills(): Promise<SkillCategory[]> {
    if (!API_URL) return portfolio.skills;
    return apiFetch<SkillCategory[]>("/api/skills");
  },

  async getProjects(): Promise<Project[]> {
    if (!API_URL) return portfolio.projects;
    return apiFetch<Project[]>("/api/projects");
  },

  async getExperience(): Promise<Experience[]> {
    if (!API_URL) return portfolio.experience;
    return apiFetch<Experience[]>("/api/experience");
  },

  async getEducation(): Promise<Education[]> {
    if (!API_URL) return portfolio.education;
    return apiFetch<Education[]>("/api/education");
  },

  async getCertifications(): Promise<Certification[]> {
    if (!API_URL) return portfolio.certifications;
    return apiFetch<Certification[]>("/api/certifications");
  },

  async getServices(): Promise<Service[]> {
    if (!API_URL) return portfolio.services;
    return apiFetch<Service[]>("/api/services");
  },

  async getSocialLinks(): Promise<SocialLink[]> {
    if (!API_URL) return portfolio.socialLinks;
    return apiFetch<SocialLink[]>("/api/social-links");
  },

  async getSettings(): Promise<SiteSettings> {
    if (!API_URL) return portfolio.settings;
    return apiFetch<SiteSettings>("/api/settings");
  },

  async sendContactMessage(
    data: ContactMessage
  ): Promise<{ success: boolean; demo?: boolean }> {
    if (!API_URL) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, demo: true }), 800);
      });
    }
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Failed to send message: ${res.status}`);
    }
    return res.json();
  },
};
