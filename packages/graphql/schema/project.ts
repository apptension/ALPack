import { ZodError } from 'zod';

import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

const ProjectInput = builder.inputType('ProjectInput', {
  fields: (t) => ({
    name: t.string({
      required: true,
      validate: {
        maxLength: 255,
        refine: [
          async (val) => {
            const count = await prismaClient.project.count({
              where: {
                name: val,
              },
            });
            return count === 0;
          },
          { message: 'Project name must be unique' },
        ],
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
    type: 'Project',
    args: {
      id: t.arg.globalID({ required: true }),
    },
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.project.findFirstOrThrow({
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
