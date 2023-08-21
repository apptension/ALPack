import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { getServerSession } from 'next-auth';
import { NextRequest } from 'next/server';

import schema, { ApiContextType } from '@ab/schema';
import { formatError } from '@ab/schema/utils/formatError';

import { authOptions } from '@app/config/auth';

const server = new ApolloServer({ schema, formatError });

// req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    const authSession = await getServerSession(authOptions);
    return { req, authSession } as ApiContextType;
  },
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
