import { Project, ProjectPlatform } from '@/types/project';

let web: ProjectPlatform = {
  name: 'Web',
  url: '/desktop.svg',
};

let ios: ProjectPlatform = {
  name: 'iOS',
  url: '/phone.svg',
};

let watch: ProjectPlatform = {
  name: 'Watch',
  url: '/watch.svg',
};

let fitnessCompetitionsProject: Project = {
  title: 'Fitness Competitions App Demo',
  articleWrittenDate: 'Dec 12, 2023',
  github: 'swiftui-golang-app-demo',
  featured: true,
  completed: true,
  description: 'A fitness competition app built with Go, SwiftUI, and NextJS',
  platforms: [ios, web, watch],
  href: '/projects/fitness-competition',
  imageObjectFit: 'object-contain',
  image: '/blog-pictures/fitnesscomp-icon.png',
  imageAlt: 'Fitness Competitions App Icon',
  tags: [
    'Go',
    'SwiftUI',
    'NextJS',
    'TypeScript',
    'Docker',
    'Redis',
    'PostgreSQL',
    'Heroku',
  ],
};

let rustAxumDemo: Project = {
  title: 'Rust Axum Demo',
  github: 'rust-axum-demo',
  articleWrittenDate: '',
  featured: true,
  completed: false,
  description:
    'A Demo Rust Axum REST API demo with OpenTelemetry Distributed Tracing',
  platforms: [ios, web, watch],
  href: '/projects/rust-axum-demo',
  imageObjectFit: 'object-contain',
  image: '/blog-pictures/rust-logo.png',
  imageAlt: 'Rust Language Logo',
  tags: [
    'Rust',
    'Axum',
    'OpenTelemetry',
    'REST API',
    'gRPC',
    'protobuf',
    'Docker',
  ],
};

let personalWebsiteProject: Project = {
  title: 'Portfolio Website',
  github: 'personal-site',
  featured: true,
  completed: false,
  articleWrittenDate: '',
  description: 'A personal website built with NextJS and TailwindCSS',
  platforms: [web],
  imageObjectFit: 'object-cover',
  href: '/projects/personal-website',
  image: '/blog-pictures/personal-website-header.png',
  imageAlt: 'Image of NYC Skyline sunset',
  tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'Vercel'],
};

let allProjects: Project[] = [
  fitnessCompetitionsProject,
  personalWebsiteProject,
  rustAxumDemo,
];

export {
  allProjects,
  fitnessCompetitionsProject,
  personalWebsiteProject,
  rustAxumDemo,
};
