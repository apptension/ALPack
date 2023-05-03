import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

builder.prismaNode('Service', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    project: t.relation('project'),
    versions: t.prismaConnection({
      type: 'ServiceVersion',
      cursor: 'id',
      resolve: (query, parent) => prismaClient.serviceVersion.findMany({ ...query, where: { serviceId: parent.id } }),
    }),
    currentVersion: t.prismaField({
      type: 'ServiceVersion',
      nullable: true,
      resolve: async (query, parent) =>
        prismaClient.serviceVersion.findFirst({
          ...query,
          where: {
            isCurrent: true,
            serviceId: parent.id,
          },
        }),
    }),
  }),
});
