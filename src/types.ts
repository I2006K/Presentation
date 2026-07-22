export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Full Stack' | 'Automatización' | 'Web Architecture' | 'Backend & DB';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures: string[];
  impact?: string;
  architectureHighlight?: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  featured?: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Prácticas / Dual VET' | 'Voluntariado' | 'Laboral';
  description: string[];
  highlights: string[];
  techUsed: string[];
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  details: string;
}

export interface EnglishCertification {
  candidateName: string;
  level: string;
  examName: string;
  issuingBody: string;
  issueDate: string;
  verificationNumber: string;
  venue: string;
  overallScore: number;
  breakdown: {
    listening: { score: number; level: string };
    reading: { score: number; level: string };
    writing: { score: number; level: string };
    speaking: { score: number; level: string };
  };
}

export interface TechnicalSkill {
  name: string;
  category: 'Lenguajes' | 'Herramientas y DevOps' | 'Metodologías y Gestión';
  level: 'Avanzado' | 'Intermedio' | 'En aprendizaje continuo';
  iconName?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface ArchitectureProposal {
  title: string;
  summary: string;
  components: { name: string; role: string; tech: string }[];
  aiIntegrationPoint: string;
  automationBenefit: string;
}
