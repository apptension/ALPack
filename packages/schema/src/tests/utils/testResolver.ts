import { GraphQLArgs, Source, graphql } from 'graphql';
import { applyMiddleware } from 'graphql-middleware';
import { IRules, deny, shield } from 'graphql-shield';
import { buildSchema } from 'type-graphql';

import { mergePermissions } from '../../auth';
import { DeleteResult } from '../../resolvers/types';

export type PermissionArgs = {
  permissions?: IRules;
};

export type TestResolverOptions = Partial<Omit<GraphQLArgs, 'source'>> & PermissionArgs;

export const testResolver = async (resolver: any, source: string | Source, options: TestResolverOptions = {}) => {
  const schema = await buildSchema({
    resolvers: [resolver],
    validate: true,
    orphanedTypes: [DeleteResult],
  });

  const defaultContext = {
    authSession: null,
  };

  const { permissions = {}, contextValue = defaultContext, ...restOpts } = options;

  const perms = mergePermissions(permissions);
  const schemaWithPerms = applyMiddleware(
    schema,
    shield(perms, {
      fallbackRule: deny,
      allowExternalErrors: true,
    })
  );

  const result = await graphql({ ...restOpts, schema: schemaWithPerms, source, contextValue });

  return {
    schema: schemaWithPerms,
    result,
  };
};
