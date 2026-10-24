// src/types/project.ts

export type ProjectStatus = "live-client" | "live-app" | "in-development" | "concept";

export type ProjectCategory =
  | "SaaS & POS"
  | "E-Commerce & Web"
  | "Fleet & Operations"
  | "Client & NGO";

export interface ProjectType {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  /** Short 1-2 sentence overview for quick card scanning */
  summary: string;
  /** Full description for expanded portfolio view */
  description: string;
  /** Concise, fact-based summary tailored for the CV */
  cvSummary: string;
  /** 2-3 technical engineering bullet points for the CV & expandable card */
  highlights: string[];
  /** Your specific role on the project */
  role: string;
  image: string;
  techStack: string[];
  /** Core 4-6 technologies highlighted on the CV to avoid tag clutter */
  coreTech: string[];
  liveLink?: string;
  displayUrl?: string;
  repoLink?: string;
  isDeployed: boolean;
  status: ProjectStatus;
  statusLabel: string;
  /** One Piece theme rank for portfolio flavor */
  difficulty: "Rookie" | "Supernova" | "Emperor";
  /** Whether to include in the curated CV view by default */
  featuredOnCv: boolean;
  cvOrder: number;
}