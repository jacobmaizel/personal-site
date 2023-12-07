export type Project = {
  name: string;
  description: string;
  link: string;
};

export type ProjectPlatform = {
  name: string;
  url: string;
};

export type BlogHeaderProps = {
  title: string;
  articleWrittenDate: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageObjectFit?: string;
  href: string;
  github: string;
  platforms: ProjectPlatform[];
  tags: string[];
};
