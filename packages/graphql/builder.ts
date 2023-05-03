import SchemaBuilder from '@pothos/core';
import ErrorsPlugin from '@pothos/plugin-errors';
import PrismaPlugin from '@pothos/plugin-prisma';
import RelayPlugin from '@pothos/plugin-relay';
import ValidationPlugin from '@pothos/plugin-validation';

import prismaClient from '@vm/prisma/client';
import PrismaTypes from '@vm/prisma/generated/types';

export const builder = new SchemaBuilder<{
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

builder.queryType({});
builder.mutationType({});
