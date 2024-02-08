import Image from 'next/image';
import { Project } from '@/types/project';
import Link from 'next/link';
import { Divider } from '@/components/ui/divider';
import { allProjects } from '@/common/projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@components/ui/badge';
import classNames from 'classnames';
import { isDev } from '@/lib/utils';
import { ProjectCard } from '@/components/project-card';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col">
        {/* Intro */}
        <p className="font-bold text-3xl mb-4">
          Hey there! You found Jacob Maizel&apos;s blog! 👋🏼
        </p>

        <p>
          I&apos;m a software engineer based in New York City, currently looking
          for a new role!
        </p>

        <p className="mt-4">
          If you&apos;re looking for a highly versatile, experience software
          engineer to handle backend, frontend, or both, check out my LinkedIn
          above and lets chat!
        </p>

        <p className="pt-4">
          On the side, I work on a wide range of personal projects. I plan on
          open sourcing and writing about some of them on this site.
        </p>

        {/* <Divider padding={'py-4'} width={'w-full'} /> */}

        <p className="leading-tight pt-4 ">
          Connect with me on LinkedIn above, or check out some of my projects
          below!
          <br />
          <span className="italic ">
            If they are not available on Github yet, they will be soon!
          </span>
        </p>

        <Divider padding={'py-4'} width={'w-full'} />

        {/* Projects */}

        <p className="font-bold text-2xl py-4">Projects</p>

        <div className="gap-4 flex flex-col items-center md:items-start md:flex-row md:flex-wrap">
          {allProjects
            .filter(project => {
              return project.featured;
            })
            .map(project => {
              return <ProjectCard key={project.title} project={project} />;
            })}
        </div>
      </div>
    </div>
  );
}
