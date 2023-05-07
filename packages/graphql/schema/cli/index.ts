import { GraphQLSchema } from 'graphql/type';

import { builder } from '../../builder';
import '../../types';
import '../nodes';
import './version';

const schema: GraphQLSchema = builder.toSchema();
export default schema;
