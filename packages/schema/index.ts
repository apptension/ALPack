import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DeleteResult } from 'typeorm';

import { authChecker } from './auth/authChecker';
import { initializeDataSource } from './data-source';

import { PhotoResolver } from './resolvers/photo/photo.resolver';
import { CRUDItemResolver } from './resolvers/crudItem/crudItem.resolver';

const schema = await buildSchema({
  resolvers: [PhotoResolver, CRUDItemResolver],
  validate: true,
  orphanedTypes: [DeleteResult],
  authChecker,
});

export const initialized = await initializeDataSource();

export * from './types';
export default schema;
