import { useQuery } from '@apollo/client';
import React from 'react';

import { projectsQuery } from './projects.graphql';

export const ProjectsComponent = () => {
  const { loading, data } = useQuery(projectsQuery);

  if (loading || !data) {
    return null;
  }

  return (
    <>
      {data.projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </>
  );
};
