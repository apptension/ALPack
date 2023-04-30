import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
// import { DateTimeResolver } from 'graphql-scalars'

import prismaClient from '@vm/prisma/client';
import PrismaTypes from '@vm/prisma/generated/types';

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prismaClient,
  }
})

builder.queryType({})

// builder.mutationType({})

builder.prismaObject("Post", {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
  })
})

builder.queryField('posts', (t) =>
  t.prismaField({
    type: ['Post'],
    resolve: async (query, _parent, _args, _info) =>
      prismaClient.post.findMany({
        ...query,
      })
  })
)

export default builder.toSchema()
