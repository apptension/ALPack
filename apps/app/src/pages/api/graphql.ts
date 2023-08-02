import schema from '@ab/schema';
import { formatError } from '@ab/schema/utils/formatError';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const server = new ApolloServer({ schema, formatError });

export default startServerAndCreateNextHandler(server);
