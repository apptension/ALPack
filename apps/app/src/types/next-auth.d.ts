import { DefaultSession } from 'next-auth';

import { UserRole } from '@ab/schema';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession['user'];
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    role: UserRole;
  }
}
