import { GraphQLArgs, Source, graphql } from 'graphql';
import { buildSchema } from 'type-graphql';

import { authChecker } from '../../auth/authChecker';
import { DeleteResult } from '../../resolvers/types';

export const testResolver = async (
  resolver: any,
  source: string | Source,
  options: Partial<Omit<GraphQLArgs, 'source'>> = {}
) => {
  const schema = await buildSchema({
    resolvers: [resolver],
    validate: true,
    authChecker,
    orphanedTypes: [DeleteResult],
  });

  const defaultContext = {
    authSession: null,
  };

  const contextValue = options.contextValue || defaultContext;

  const result = await graphql({ ...options, schema, source, contextValue });

  return { schema, result };
};
