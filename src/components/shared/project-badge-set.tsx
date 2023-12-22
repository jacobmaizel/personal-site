import { Project } from '@/types/project';
import { Badge } from '../ui/badge';

export function ProjectBadgeSet({ project }: { project: Project }) {
  return (
    <div>
      {!project.blogCompleted && (
        <Badge className="mr-2 mb-1 border-red-900" variant={'outline'}>
          Blog In Progress
        </Badge>
      )}

      {project.sourceType === 'Closed Source' && (
        <Badge className=" mr-2 mb-1 border-blue-900" variant={'outline'}>
          Closed Source
        </Badge>
      )}

      {project.developmentStatus === 'Active Development' && (
        <Badge className=" mr-2 mb-1 border-yellow-700" variant={'outline'}>
          Active Development
        </Badge>
      )}

      {project.developmentStatus === 'Completed' && (
        <Badge className=" mr-2 mb-1 border-orange-900" variant={'outline'}>
          Completed
        </Badge>
      )}

      {project.sourceType === 'Open Source' && (
        <Badge className=" mr-2 mb-1 border-green-900" variant={'outline'}>
          Open Source
        </Badge>
      )}

      {project.projectType === 'Demo' && (
        <Badge className=" mr-2 mb-1 border-sky-400" variant={'outline'}>
          Demo
        </Badge>
      )}

      {project.projectType === 'Production' && (
        <Badge className=" mr-2 mb-1 border-purple-700" variant={'outline'}>
          Production
        </Badge>
      )}

      {project.videoUrl && (
        <Badge className=" mr-2 mb-1 border-pink-700" variant={'outline'}>
          Video
        </Badge>
      )}
    </div>
  );
}
