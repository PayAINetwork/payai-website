import projects from "@/data/projects.json";

export type Project = {
  name: string;
  logo: string;
  description: string;
  websiteUrl?: string;
  twitterUrl?: string;
  category: string;
  testimonial?: string;
  testimonialAuthor?: string;
};

/**
 * Same rule the add-project workflow uses to name logo files
 * (.github/workflows/add-project.yml), so a project's page URL is predictable
 * from its name and stays stable for as long as the name does.
 */
export function projectSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function projectPath(name: string): string {
  return `/ecosystem/${projectSlug(name)}`;
}

export const PROJECTS: (Project & { slug: string })[] = (projects as Project[]).map(
  (project) => ({ ...project, slug: projectSlug(project.name) }),
);

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

/*
 * A page that carries only a one-line blurb is thin content, and on a site
 * this small a few dozen of them would outweigh the real pages. Thin project
 * pages still render and pass link equity (noindex, follow) but stay out of
 * the index and the sitemap until the listing has enough unique text.
 */
const MIN_INDEXABLE_WORDS = 40;

export function isIndexable(project: Project): boolean {
  const text = `${project.description} ${project.testimonial ?? ""}`;
  return text.split(/\s+/).filter(Boolean).length >= MIN_INDEXABLE_WORDS;
}
