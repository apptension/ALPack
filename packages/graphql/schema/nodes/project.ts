import prismaClient from '@vm/prisma/client';

import { builder } from '../../builder';

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
