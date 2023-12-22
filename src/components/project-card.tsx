import { Project } from '@/types/project';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { isDev } from '@/lib/utils';
import classNames from 'classnames';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { ProjectBadgeSet } from './shared/project-badge-set';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex">
      <Link
        // legacyBehavior
        // passHref
        href={project.href}
        scroll={true}
        // tabIndex={!project.blogCompleted ? -1 : undefined}
        // aria-disabled={!project.blogCompleted && !isDev}
        // className={classNames(
        //   !project.blogCompleted && !isDev ? 'pointer-events-none' : '',
        // )}
      >
        <Card className="w-[350px] min-h-[170px]">
          <CardHeader>
            <div className=" leading-tight">
              <CardTitle>{project.title}</CardTitle>
              {project.blogCompleted && (
                <text className="text-sm text-muted-foreground">
                  {project.articleWrittenDate}
                </text>
              )}
            </div>

            <CardDescription>{project.description}</CardDescription>

            <ProjectBadgeSet project={project} />
          </CardHeader>

          <CardContent>
            {project.tags.map(tag => {
              return (
                <Badge key={tag} className="mr-2 mb-1">
                  {tag}
                </Badge>
              );
            })}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
