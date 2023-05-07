import { ZodError } from 'zod';

import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

const EnvironmentInput = builder.inputType('EnvironmentInput', {
  fields: (t) => ({
    name: t.string({
      required: true,
    }),
    projectId: t.string({
      required: true,
      validate: {
        uuid: true,
        refine: [
          async (id) => {
            const count = await prismaClient.project.count({
              where: {
                id,
              },
            });
            return count === 1;
          },
          { message: 'ProjectId is invalid' },
        ],
      },
    }),
  }),
  validate: [
    async (args) => {
      const name = args['name'];
      const projectId = args['projectId'];
      if (!name || !projectId) return false;
      const count = await prismaClient.environment.count({
        where: {
          name,
          projectId,
        },
      });
      return count === 0;
    },
    { message: 'Environment name must be unique' },
  ],
});

builder.mutationField('createEnvironment', (t) =>
  t.prismaField({
    type: 'Environment',
    errors: {
      types: [ZodError],
    },
    args: { input: t.arg({ type: EnvironmentInput, required: true }) },
    resolve: (root, _parent, args) =>
      prismaClient.environment.create({
        data: args.input,
      }),
  })
);
