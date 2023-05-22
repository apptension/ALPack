import { ZodError } from 'zod';

import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

const VersionInput = builder.inputType('VersionInput', {
  fields: (t) => ({
    name: t.string({
      required: true,
    }),
    environmentId: t.string({
      required: true,
      validate: {
        uuid: true,
        refine: [
          async (id) => {
            const count = await prismaClient.environment.count({
              where: {
                id,
              },
            });
            return count === 1;
          },
          { message: 'EnvironmentId is invalid' },
        ],
      },
    }),
    isCurrent: t.boolean({
      required: true,
      validate: {
        type: 'boolean',
      },
    }),
  }),
  validate: [
    async (args) => {
      const name = args['name'];
      const environmentId = args['environmentId'];
      if (!name || !environmentId) return false;
      const count = await prismaClient.version.count({
        where: {
          name,
          environmentId,
        },
      });
      return count === 0;
    },
    { message: 'Version name must be unique' },
  ],
});

builder.mutationField('createVersion', (t) =>
  t.prismaField({
    type: 'Version',
    errors: {
      types: [ZodError],
    },
    args: { input: t.arg({ type: VersionInput, required: true }) },
    resolve: async (root, _parent, args) => {
      const { input } = args;
      const getCreateVersionQuery = () =>
        prismaClient.version.create({
          data: input,
        });
      if (!input.isCurrent) {
        return getCreateVersionQuery();
      }
      const [_, version] = await prismaClient.$transaction([
        prismaClient.version.updateMany({
          where: {
            environmentId: input.environmentId,
          },
          data: {
            isCurrent: false,
          },
        }),
        getCreateVersionQuery(),
      ]);
      return version;
    },
  })
);
