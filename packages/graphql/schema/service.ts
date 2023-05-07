import { ZodError } from 'zod';

import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

const ServiceInput = builder.inputType('ServiceInput', {
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
      const count = await prismaClient.service.count({
        where: {
          name,
          projectId,
        },
      });
      return count === 0;
    },
    { message: 'Service name must be unique' },
  ],
});

builder.mutationField('createService', (t) =>
  t.prismaField({
    type: 'Service',
    errors: {
      types: [ZodError],
    },
    args: { input: t.arg({ type: ServiceInput, required: true }) },
    resolve: (root, _parent, args) =>
      prismaClient.service.create({
        data: args.input,
      }),
  })
);
