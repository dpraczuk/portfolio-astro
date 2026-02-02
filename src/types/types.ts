interface Project {
  title: string;
  slug: string;
  company?: string;
  order: number;
  projectStage: string;
  technologyStack: string[];
  shortDescription: string;
  projectImages: ProjectImage[];
  description: string;
  id: string;
  links: ProjectLink[];
}

interface ProjectLink {
  url: string;
  linkName: string;
}

interface ProjectImage {
  id: string;
  url: string;
}

export type { Project, ProjectLink, ProjectImage };
