import { GraphQLArgs, Source, graphql } from 'graphql';
import { buildSchema } from 'type-graphql';
import { DeleteResult } from '../../resolvers/types/returnTypes';


export const testResolver = async (
  resolver: any,
  source: string | Source,
  options: Partial<Omit<GraphQLArgs, 'source'>> = {}
) => {
  const schema = await buildSchema({
    resolvers: [resolver],
    validate: true,
    orphanedTypes: [DeleteResult]
  });

  const result = await graphql({ ...options, schema, source });

  return { schema, result };
};
