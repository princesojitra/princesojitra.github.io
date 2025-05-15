declare module '*.json' {
  const value: ResumeData;
  export default value;
}

interface ResumeData {
  basics: {
    name: string;
    title: string;
    image: string;
    email: string;
    phone: string;
    location: string;
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  languages: {
    language: string;
    fluency: string;
  }[];
  work: {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  projects: {
    id: number;
    title: string;
    role: string;
    language: string;
    technology: string;
    description: string;
    appLink?: string;
    featuresLink?: string;
    screenshots: string[];
  }[];
} 