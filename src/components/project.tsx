import React from 'react';
import Link from 'next/link';

import type { Project } from '@/types/project';

interface Props {
  project: Project;
}

export default function Project({
  project: { name, description, link },
}: Props) {
  return (
    <div className="flex rounded-md border-red-300">
      <text>{name}</text>
      <text>{description}</text>

      <Link href={link}>
        <a>Link</a>
      </Link>
    </div>
  );
}
