import { useQuery } from '@apollo/client';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

import { ProjectsListItem } from '@app/components/dashboard/projectsList/projectsListItem.component';
import { projectsQuery } from '@app/graphql';

export const ProjectsList = () => {
  const { loading, data } = useQuery(projectsQuery);

  if (loading || !data) {
    return null;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link
          href="/projects/new"
          className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          New Project
        </Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.projects.map((project) => (
          <ProjectsListItem project={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
};
