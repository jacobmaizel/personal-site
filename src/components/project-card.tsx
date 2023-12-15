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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div key={project.title} className="flex">
      <Link
        href={project.href}
        scroll={true}
        tabIndex={!project.completed ? -1 : undefined}
        aria-disabled={!project.completed && !isDev}
        className={classNames(
          !project.completed && !isDev ? 'pointer-events-none' : '',
        )}
      >
        <Card className="w-[350px] min-h-[170px]">
          <CardHeader>
            <div className=" leading-tight">
              <CardTitle>{project.title}</CardTitle>
              {project.completed && (
                <text className="text-sm text-muted-foreground">
                  {project.articleWrittenDate}
                </text>
              )}
            </div>

            <CardDescription>{project.description}</CardDescription>

            <div>
              {!project.completed && (
                <Badge className="mr-2 mb-1 border-red-900" variant={'outline'}>
                  Blog In Progress
                </Badge>
              )}

              {project.sourceType === 'Closed Source' && (
                <Badge
                  className=" mr-2 mb-1 border-blue-900"
                  variant={'outline'}
                >
                  Closed Source
                </Badge>
              )}

              {project.sourceType === 'Open Source' && (
                <Badge
                  className=" mr-2 mb-1 border-green-900"
                  variant={'outline'}
                >
                  Open Source
                </Badge>
              )}

              {project.projectType === 'Demo' && (
                <Badge
                  className=" mr-2 mb-1 border-sky-400"
                  variant={'outline'}
                >
                  Demo
                </Badge>
              )}

              {project.projectType === 'Production' && (
                <Badge
                  className=" mr-2 mb-1 border-purple-700"
                  variant={'outline'}
                >
                  Production
                </Badge>
              )}
            </div>
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
}