import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import { authChecker } from './auth/authChecker';
import { initializeDataSource } from './data-source';
import { PhotoResolver } from './resolvers/photo';

const schema = await buildSchema({
  resolvers: [PhotoResolver],
  validate: true,
  authChecker,
});

export const initialized = await initializeDataSource();

export * from './types';
export default schema;
