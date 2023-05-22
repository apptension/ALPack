import { useQuery } from '@apollo/client';
import React from 'react';

import { projectsQuery } from './projectVersionsView.graphql';

interface ProjectVersionsViewProps {
  projectId: string;
}

export const ProjectVersionsView = ({ projectId }: ProjectVersionsViewProps) => {
  const { loading, data } = useQuery(projectsQuery, { variables: { id: projectId } });

  if (loading || !data) {
    return null;
  }

  const project = data.project;
  return (
    <>
      <div className="text-xl p-2">{project.name}</div>
      <div className="grid grid-flow-col justify-stretch">
        {project.environments.edges.map((environmentNode, key) => {
          const env = environmentNode?.node;
          return (
            <div
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden m-2 ring-1 ring-slate-900/5 shadow-xl"
              key={key}
            >
              <div className="p-2">
                <div className="text-slate-500 dark:text-slate-400">Environment name</div>
                <div className="text-xl font-medium text-slate-950 dark:text-white">{env?.name}</div>
                <a href="#" className="text-blue-600">
                  Open environment
                </a>
              </div>
              <div className="p-2">
                <div className="text-slate-500 dark:text-slate-400">Version</div>
                <div className="text-xl font-medium text-green-800 dark:text-green-500">1.0.{key - 1}</div>
                <div className="text-slate-400 text-sx">Updated: 6.05.23 16:41:11</div>
              </div>
              <div className="bg-gray-100 dark:bg-slate-700 p-2">
                <a href="#" className="text-gray-500 dark:text-slate-400 font-medium">
                  Show environment history
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-flow-col justify-stretch">
        {project.environments.edges.map((environmentNode, key) => {
          const env = environmentNode?.node;
          return (
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden m-2" key={key}>
              <div className="p-2">
                <div className="text-slate-500 dark:text-slate-400 font-medium">Environment services</div>
              </div>
              {project.services.edges.map((serviceNode, key) => {
                const service = serviceNode?.node;
                return (
                  <div className="p-2" key={key}>
                    <div className="text-slate-500 dark:text-slate-400 font-medium">{service?.name}</div>
                    <div className="text-xl font-medium text-green-800 dark:text-green-500"></div>
                    <div className="text-slate-400 text-sx">Updated: 6.05.23 16:41:11</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
