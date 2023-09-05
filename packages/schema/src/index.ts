import { applyMiddleware } from 'graphql-middleware';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DeleteResult } from 'typeorm';

import { permissions } from './auth/permissions';
import { initializeDataSource } from './data-source';
import { CRUDItemResolver } from './resolvers/crudItem/crudItem.resolver';
import { UserResolver } from './resolvers/user/user.resolver';

const schema = await buildSchema({
  resolvers: [UserResolver, CRUDItemResolver],
  validate: true,
  orphanedTypes: [DeleteResult],
});

export const initialized = await initializeDataSource();

export * from './types';
export default applyMiddleware(schema, permissions);
