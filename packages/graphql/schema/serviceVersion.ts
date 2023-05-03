import { builder } from '../builder';

builder.prismaNode('ServiceVersion', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    createdAt: t.exposeString('createdAt'),
    isCurrent: t.exposeBoolean('isCurrent'),
    service: t.relation('service'),
    version: t.relation('version'),
  }),
});
