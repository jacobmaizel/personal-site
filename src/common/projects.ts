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
  developmentStatus: 'Completed',
  sourceType: 'Open Source',
  projectType: 'Demo',
  blogCompleted: true,
  description: 'A fitness competition app built with Go, SwiftUI, and NextJS',
  platforms: [ios, web, watch],
  href: '/projects/fitness-competition',
  imageObjectFit: 'object-cover',
  image: '/blog-pictures/fit-comp-header.png',
  imageAlt: 'ai generated fitness focused header image',
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
  sourceType: 'Open Source',
  projectType: 'Demo',
  featured: true,
  developmentStatus: 'Completed',
  blogCompleted: false,
  description:
    'A Demo Rust Axum REST API demo with OpenTelemetry Distributed Tracing',
  platforms: [ios, web, watch],
  href: '/projects/rust-axum-demo',
  imageObjectFit: 'object-cover',
  image: '/blog-pictures/axum-demo-header.png',
  imageAlt: 'rust, axum and grpc ai generated header image',
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
  sourceType: 'Open Source',
  projectType: 'Demo',
  featured: true,
  blogCompleted: false,
  developmentStatus: 'Active Development',
  articleWrittenDate: '',
  description: 'A personal website built with NextJS and TailwindCSS',
  platforms: [web],
  imageObjectFit: 'object-cover',
  href: '/projects/personal-website',
  image: '/blog-pictures/website-blog.png',
  imageAlt: 'ai generated header image abstract',
  tags: ['NextJS', 'TailwindCSS', 'TypeScript', 'Vercel'],
};

let personalTrainingPlatform: Project = {
  title: 'Personal Training Platform',
  // github: 'personal-training-platform',
  sourceType: 'Closed Source',
  projectType: 'Production',
  featured: true,
  blogCompleted: false,
  developmentStatus: 'Active Development',
  articleWrittenDate: '',
  description: 'An end to end personal training management platform',
  platforms: [web, ios, watch],
  href: '/projects/training-platform',
  imageObjectFit: 'object-cover',
  image: '/blog-pictures/training-platform.png',
  imageAlt: 'training app ai generated abstract header image',
  tags: [
    'Rust',
    'Axum',
    'OpenTelemetry',
    'PostgreSQL',
    'Docker',
    'SwiftUI',
    'watchOS',
    'NextJS',
    'Redis Stack',
    'AWS Fargate',
  ],
};

let allProjects: Project[] = [
  fitnessCompetitionsProject,
  personalWebsiteProject,
  rustAxumDemo,
  personalTrainingPlatform,
];

export {
  allProjects,
  fitnessCompetitionsProject,
  personalWebsiteProject,
  rustAxumDemo,
  personalTrainingPlatform,
};
