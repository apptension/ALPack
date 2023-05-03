import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

builder.prismaNode('Environment', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    project: t.relation('project'),
    versions: t.prismaConnection({
      type: 'Version',
      cursor: 'id',
      resolve: (query, parent) => prismaClient.version.findMany({ ...query, where: { environmentId: parent.id } }),
    }),
    currentVersion: t.prismaField({
      type: 'Version',
      nullable: true,
      resolve: async (query, parent) =>
        prismaClient.version.findFirst({
          ...query,
          where: {
            isCurrent: true,
            environmentId: parent.id,
          },
        }),
    }),
  }),
});
