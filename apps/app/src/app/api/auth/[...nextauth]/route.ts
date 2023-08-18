import { TypeORMAdapter } from '@auth/typeorm-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { dataSourceOptions, initializeDataSource } from '@ab/schema/data-source';
import * as entities from '@ab/schema/entity/auth';
import { UserRole } from '@ab/schema/types';

export const initialized = await initializeDataSource();

export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: TypeORMAdapter(dataSourceOptions, { entities }),
  providers: [
    GoogleProvider({
      clientId: process.env['OAUTH_GOOGLE_CLIENT_ID'] ?? '',
      clientSecret: process.env['OAUTH_GOOGLE_SECRET'] ?? '',
    }),
  ],
  session: {
    /**
     * See https://next-auth.js.org/configuration/nextjs#caveats, middleware (currently) doesn't support the "database"
     * strategy which is used by default when using an adapter (https://next-auth.js.org/configuration/options#session)
     *
     * https://github.com/nextauthjs/next-auth/issues/5170#issuecomment-1228008390
     */
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user }) {
      // save role in JWT
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role as UserRole;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
