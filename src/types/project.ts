export type ProjectPlatform = {
  name: string;
  url: string;
};

export type Project = {
  title: string;
  articleWrittenDate: string;
  description: string;
  sourceType: SourceType;
  projectType: ProjectType;
  featured: boolean;
  completed: boolean;
  image: string;
  imageAlt?: string;
  imageObjectFit?: string;
  href: string;
  github?: string;
  platforms: ProjectPlatform[];
  tags: string[];
};

export type SourceType = 'Open Source' | 'Closed Source';
export type ProjectType = 'Demo' | 'Production';
