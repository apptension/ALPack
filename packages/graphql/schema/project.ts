import { ZodError } from 'zod';

import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

builder.prismaNode('Project', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    environments: t.prismaConnection({
      type: 'Environment',
      cursor: 'id',
      resolve: (query, parent, args, context, info) =>
        prismaClient.environment.findMany({ ...query, where: { projectId: parent.id } }),
    }),
    services: t.prismaConnection({
      type: 'Service',
      cursor: 'id',
      resolve: (query, parent, args, context, info) =>
        prismaClient.service.findMany({ ...query, where: { projectId: parent.id } }),
    }),
  }),
});

const ProjectInput = builder.inputType('ProjectInput', {
  fields: (t) => ({
    name: t.string({
      required: true,
      validate: {
        maxLength: 255,
      },
    }),
  }),
});

builder.queryField('projects', (t) =>
  t.prismaField({
    type: ['Project'],
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.project.findMany({
        ...query,
      }),
  })
);

builder.queryField('project', (t) =>
  t.prismaField({
    type: ['Project'],
    args: {
      id: t.arg.globalID({ required: true }),
    },
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.project.findMany({
        ...query,
        where: {
          id: String(_args.id.id),
        },
      }),
  })
);

builder.mutationField('createProject', (t) =>
  t.prismaField({
    type: 'Project',
    errors: {
      types: [ZodError],
    },
    args: { input: t.arg({ type: ProjectInput, required: true }) },
    resolve: (root, _parent, args) =>
      prismaClient.project.create({
        data: args.input,
      }),
  })
);
