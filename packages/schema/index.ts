import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import { initializeDataSource } from './data-source';
import { PhotoResolver } from './resolvers/photo';

const schema = await buildSchema({
  resolvers: [PhotoResolver],
  validate: true,
});

export const initialized = await initializeDataSource();

export default schema;
