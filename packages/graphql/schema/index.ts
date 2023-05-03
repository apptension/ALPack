import { GraphQLSchema } from 'graphql/type';

import { builder } from '../builder';
import '../types';
import './environment';
import './project';
import './service';
import './serviceVersion';
import './version';

const schema: GraphQLSchema = builder.toSchema();
export default schema;
