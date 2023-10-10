import NextAuth from 'next-auth';

import { initializeDataSource } from '@alp/graphql-api/data-source';

import { authOptions } from '@app/config/auth';

await initializeDataSource();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
