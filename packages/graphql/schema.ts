import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import RelayPlugin from '@pothos/plugin-relay';

import prismaClient from '@vm/prisma/client';
import PrismaTypes from '@vm/prisma/generated/types';

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [RelayPlugin, PrismaPlugin],
  prisma: {
    client: prismaClient,
    filterConnectionTotalCount: true,
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
  }
})

builder.queryType({})

// builder.mutationType({})

builder.prismaNode("Project", {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    environments: t.prismaConnection({
        type: 'Environment',
        cursor: 'id',
        resolve: (query, parend, args, context, info) =>
            prismaClient.environment.findMany({ ...query })
    }),
    services: t.prismaConnection({
        type: 'Service',
        cursor: 'id',
        resolve: (query, parend, args, context, info) =>
            prismaClient.service.findMany({ ...query })
    })
  })
})

builder.prismaNode('Service', {
    id: { field: 'id'},
    fields: t => ({
        name: t.exposeString('name'),
        project: t.relation('project'),
        versions: t.prismaConnection({
            type: 'ServiceVersion',
            cursor: 'id',
            resolve: (query) =>
                prismaClient.serviceVersion.findMany({ ...query })
        }),
        currentVersion: t.prismaField({
            type: 'ServiceVersion',
            nullable: true,
            resolve: async (query) =>
                prismaClient.serviceVersion.findFirst({
                    ...query,
                    where: {
                        isCurrent: true
                    }
                })
        })
    })
})

builder.prismaNode('Environment', {
    id: { field: 'id'},
    fields: t => ({
        name: t.exposeString('name'),
        project: t.relation('project'),
        versions: t.prismaConnection({
            type: 'Version',
            cursor: 'id',
            resolve: (query) =>
                prismaClient.version.findMany({ ...query })
        }),
        currentVersion: t.prismaField({
            type: 'Version',
            nullable: true,
            resolve: async (query) =>
                prismaClient.version.findFirst({
                    ...query,
                    where: {
                        isCurrent: true
                    }
                })
        })
    })
})

builder.prismaNode('Version', {
    id: { field: 'id'},
    fields: t => ({
        name: t.exposeString('name'),
        createdAt: t.exposeString('createdAt'),
        isCurrent: t.exposeBoolean('isCurrent'),
        environment: t.relation('environment'),
        serviceVersions: t.prismaConnection({
            type: 'ServiceVersion',
            cursor: 'id',
            resolve: (query) =>
                prismaClient.serviceVersion.findMany({ ...query })
        }),
    })
})

builder.prismaNode('ServiceVersion', {
    id: { field: 'id'},
    fields: t => ({
        name: t.exposeString('name'),
        createdAt: t.exposeString('createdAt'),
        isCurrent: t.exposeBoolean('isCurrent'),
        service: t.relation('service'),
        version: t.relation('version')
    })
})

builder.queryField('projects', (t) =>
  t.prismaField({
    type: ['Project'],
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.project.findMany({
        ...query,
      })
  })
)

builder.queryField('project', (t) =>
  t.prismaField({
    type: ['Project'],
      args: {
          id: t.arg.globalID({ required: true })
      },
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.project.findMany({
        ...query,
          where: {
            id: String(_args.id.id)
          }
      })
  })
)

export default builder.toSchema()
