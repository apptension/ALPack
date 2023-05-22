import { GraphQLSchema } from 'graphql/type';

import { builder } from '../builder';
import '../types';
import './environment';
import './nodes';
import './project';
import './service';
import './version';

const schema: GraphQLSchema = builder.toSchema();
export default schema;
