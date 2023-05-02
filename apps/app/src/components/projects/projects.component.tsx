import React from "react";
import { useQuery } from "@apollo/client";

import { projectsQuery } from './projects.graphql';

export const ProjectsComponent = () => {
    const { loading, data } = useQuery(projectsQuery);

    if (loading || !data) {
        return null;
    }

    console.log({ data });

    return data.projects.map(project => (
        <div key={project.id}>{project.name}</div>
    ))
}