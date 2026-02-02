import type { Project } from "@/types/types";

export const getProjectsList = async () => {
  if (!import.meta.env.HYGRAPH_API_URL) {
    throw new Error("HYGRAPH_API_URL is not defined");
  }

  const query = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
              {
                projects(first: 10) {
                  slug
                  company
                  order
                  projectStage
                  title
                  technologyStack
                  shortDescription
                  projectImages(first: 10) {
                    id
                    url
                  }
                  description
                  id
                  links(first:5) {
                    id
                    url
                    linkName
                  } 
                }
              }`,
    }),
  };

  const response = await fetch(import.meta.env.HYGRAPH_API_URL, query);
  const json = await response.json();
  const projects: Project[] = json.data.projects;

  return projects;
};
