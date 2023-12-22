'use client';
import { Project } from '@/types/project';
import classNames from 'classnames';
import Image from 'next/image';
import ThemedImage from '../shared/themed-image';
import PlatformIcon from '../shared/platform-icon';
import GitHubButton from 'react-github-btn';
import { Divider } from '../ui/divider';
import { AspectRatio } from '../ui/aspect-ratio';
import { Badge } from '../ui/badge';
import { GHProjectButton } from '../shared/gh-project-button';
import ScrollUp from '../shared/scroll-up';
import { ProjectBadgeSet } from '../shared/project-badge-set';
export function BlogHeader({ project }: { project: Project }) {
  return (
    <div className="flex flex-col w-full justify-center">
      {/* <ScrollUp /> */}
      <div className=" flex flex-col">
        <div className=" relative  w-full pb-[56%] lg:pb-[40%] xl:pb-[25%]">
          <div className=" absolute top-0 bottom-0 right-0 left-0">
            <Image
              src={project.image}
              alt={project.imageAlt ? project.imageAlt : 'Blog header image'}
              fill
              placeholder="empty"
              className={classNames('rounded-lg', project.imageObjectFit)}
            />
          </div>
        </div>

        <text className="pt-4 text-3xl md:text-4xl lg:text-6xl font-bold">
          {project.title}
        </text>

        <text className="text-sm pt-2 text-muted-foreground">
          {project.description}
        </text>

        <div className="flex items-center">
          <div className="flex py-2 mr-4">
            {project.platforms.map(platform => {
              return (
                <div key={platform.name} className="mr-2">
                  <PlatformIcon platform={platform} />
                </div>
              );
            })}
          </div>

          {project.github && (
            <GHProjectButton
              href={`https://github.com/jacobmaizel/${project.github}`}
              className="w-[1.2rem] h-[1.2rem]"
            />
          )}
        </div>
        <ProjectBadgeSet project={project} />
        {/* Dates */}
        <div className="flex flex-row flex-wrap mt-2">
          {project.tags.map(tag => {
            return (
              <Badge key={tag} className="mr-2 mb-1">
                {tag}
              </Badge>
            );
          })}
        </div>
        {project.articleWrittenDate && (
          <div className="mt-2">
            <text className="text-xs text-muted-foreground leading-tight ">
              <p>Published: {project.articleWrittenDate}</p>
            </text>
          </div>
        )}

        {/* END DATES */}
        <Divider padding={'py-4 md:pt-8'} width={'w-full'} />
      </div>
    </div>
  );
}
