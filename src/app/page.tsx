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

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col">
        {/* Intro */}
        <text className="font-bold text-3xl">
          Hey there! You found Jacob Maizel&apos;s blog! 👋🏼
        </text>

        <text className=" text-sm italic font-bold py-4">
          wait a second... who is Jacob Maizel?
        </text>

        <text>
          I&apos;m a software engineer based in New York City, currently working
          at{' '}
          <a
            href="https://www.flockx.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            FlockX
          </a>{' '}
          building software to help businesses get their activities to their
          local communities.
        </text>

        <text className="pt-4">
          On the side, I work on a wide range of personal projects. I plan on
          open sourcing and writing about some of them on this site.
        </text>

        {/* <Divider padding={'py-4'} width={'w-full'} /> */}

        <text className="leading-tight pt-4 ">
          Connect with me on LinkedIn above, or check out some of my projects
          below!
          <br />
          <text className="italic ">
            If they are not available on Github yet, they will be soon!
          </text>
        </text>

        <Divider padding={'py-4'} width={'w-full'} />

        {/* Projects */}

        <text className="font-bold text-2xl py-4">Projects</text>

        <div className="gap-4 flex flex-col items-center md:items-start md:flex-row md:flex-wrap">
          {allProjects
            .filter(project => {
              return project.featured;
            })
            .map(project => {
              return (
                <div key={project.title} className="flex">
                  <Link href={project.href} scroll={true}>
                    <Card className="w-[350px] min-h-[170px]">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                        {/* <Badge className="flex w-auto">#NextJS</Badge> */}
                      </CardHeader>

                      <CardContent>
                        {project.tags.map(tag => {
                          return (
                            <Badge key={tag} className="m-1">
                              {tag}
                            </Badge>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
