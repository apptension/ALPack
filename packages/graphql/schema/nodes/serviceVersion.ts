import { builder } from '../../builder';

builder.prismaNode('ServiceVersion', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    createdAt: t.expose('createdAt', {
      type: 'DateTime',
    }),
    isCurrent: t.exposeBoolean('isCurrent'),
    service: t.relation('service'),
    version: t.relation('version'),
  }),
});
