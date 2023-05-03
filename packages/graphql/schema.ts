import SchemaBuilder from '@pothos/core';
import ErrorsPlugin from '@pothos/plugin-errors';
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import ValidationPlugin from '@pothos/plugin-validation';
import { ZodError, ZodFormattedError } from 'zod';

import prismaClient from '@vm/prisma/client';
import PrismaTypes from '@vm/prisma/generated/types';

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [RelayPlugin, PrismaPlugin, ErrorsPlugin, ValidationPlugin],
  prisma: {
    client: prismaClient,
    filterConnectionTotalCount: true,
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
  },
});

const ErrorInterface = builder.interfaceRef<Error>('Error').implement({
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

// Util for flattening zod errors into something easier to represent in your Schema.
function flattenErrors(error: ZodFormattedError<unknown>, path: string[]): { path: string[]; message: string }[] {
  // eslint-disable-next-line no-underscore-dangle
  const errors = error._errors.map((message) => ({
    path,
    message,
  }));

  Object.keys(error).forEach((key) => {
    if (key !== '_errors') {
      errors.push(
        ...flattenErrors((error as Record<string, unknown>)[key] as ZodFormattedError<unknown>, [...path, key])
      );
    }
  });

  return errors;
}

// A type for the individual validation issues
const ValidationFieldError = builder
  .objectRef<{
    message: string;
    path: string[];
  }>('ValidationFieldError')
  .implement({
    fields: (t) => ({
      message: t.exposeString('message'),
      path: t.exposeStringList('path'),
    }),
  });

// The actual error type
builder.objectType(ZodError, {
  name: 'ValidationError',
  interfaces: [ErrorInterface],
  fields: (t) => ({
    fieldErrors: t.field({
      type: [ValidationFieldError],
      resolve: (err) => flattenErrors(err.format(), []),
    }),
  }),
});

builder.queryType({});

builder.mutationType({});

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

const ProjectInput = builder.inputType('ProjectInput', {
  fields: (t) => ({
    name: t.string({
      required: true,
      validate: {
        maxLength: 255,
      },
    }),
  }),
});

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

builder.queryField('projects', (t) =>
  t.prismaField({
    type: ['Project'],
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.project.findMany({
        ...query,
      }),
  })
);

builder.queryField('project', (t) =>
  t.prismaField({
    type: ['Project'],
    args: {
      id: t.arg.globalID({ required: true }),
    },
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.project.findMany({
        ...query,
        where: {
          id: String(_args.id.id),
        },
      }),
  })
);

builder.mutationField('createProject', (t) =>
  t.prismaField({
    type: 'Project',
    errors: {
      types: [ZodError],
    },
    args: { input: t.arg({ type: ProjectInput, required: true }) },
    resolve: (root, _parent, args) =>
      prismaClient.project.create({
        data: args.input,
      }),
  })
);

export default builder.toSchema();
