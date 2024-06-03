export interface IProject {
  title: string;
  slug: string;
  projectStage: string;
  technologyStack: string[];
  shortDescription: string;
  projectImages: {
    id: string;
    url: string;
  }[];
  description: string;
  id: string;
}
