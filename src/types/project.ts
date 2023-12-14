export type ProjectPlatform = {
  name: string;
  url: string;
};

export type Project = {
  title: string;
  articleWrittenDate: string;
  description: string;
  featured: boolean;
  image: string;
  imageAlt?: string;
  imageObjectFit?: string;
  href: string;
  github: string;
  platforms: ProjectPlatform[];
  tags: string[];
};
