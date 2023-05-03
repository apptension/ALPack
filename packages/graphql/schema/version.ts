import prismaClient from '@vm/prisma/client';

import { builder } from '../builder';

builder.prismaNode('Version', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    createdAt: t.exposeString('createdAt'),
    isCurrent: t.exposeBoolean('isCurrent'),
    environment: t.relation('environment'),
    serviceVersions: t.prismaConnection({
      type: 'ServiceVersion',
      cursor: 'id',
      resolve: (query, parent) => prismaClient.serviceVersion.findMany({ ...query, where: { versionId: parent.id } }),
    }),
  }),
});
