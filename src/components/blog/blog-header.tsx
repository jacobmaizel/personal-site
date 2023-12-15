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
export function BlogHeader({
  title,
  image,
  imageAlt,
  description,
  articleWrittenDate,
  tags,
  github,
  imageObjectFit,
  platforms,
}: Project) {
  return (
    <div className="flex flex-col w-full justify-center">
      <div className=" flex flex-col">
        <div className=" relative  w-full pb-[56%] lg:pb-[40%] xl:pb-[25%]">
          <div className=" absolute top-0 bottom-0 right-0 left-0">
            <Image
              src={image}
              alt={imageAlt ? imageAlt : 'Blog header image'}
              fill
              placeholder="empty"
              className={classNames('rounded-lg', imageObjectFit)}
            />
          </div>
        </div>

        <text className="pt-4 text-3xl md:text-4xl lg:text-6xl font-bold">
          {title}
        </text>

        <text className="text-sm pt-2 text-muted-foreground">
          {description}
        </text>

        <div className="flex items-center">
          <div className="flex py-2 mr-4">
            {platforms.map(platform => {
              return (
                <div key={platform.name} className="mr-2">
                  <PlatformIcon platform={platform} />
                </div>
              );
            })}
          </div>

          <GHProjectButton
            href={`https://github.com/jacobmaizel/${github}`}
            className="w-[1.2rem] h-[1.2rem]"
          />
        </div>

        <div className="flex flex-row flex-wrap">
          {tags.map(tag => {
            return (
              <Badge key={tag} className="m-1">
                {tag}
              </Badge>
            );
          })}
        </div>
        {/* Dates */}
        <div className="mt-2">
          <text className="text-xs text-muted-foreground leading-tight ">
            <p>Published: {articleWrittenDate}</p>
          </text>
        </div>
        {/* END DATES */}
        <Divider padding={'py-4 md:pt-8'} width={'w-full'} />
      </div>
    </div>
  );
}