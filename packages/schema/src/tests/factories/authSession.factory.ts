import { DefaultSession, ISODateString, Session } from 'next-auth';

import { UserRole } from '../../types';

export type User = { role: UserRole } & DefaultSession['user'];

export const authSessionFactory = (userData?: Partial<User>): Session => {
  const expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() + 1);

  const user: User | undefined = userData
    ? {
        role: UserRole.USER,
        name: null,
        email: null,
        image: null,
      }
    : undefined;

  return new (class implements Session {
    constructor(public expires: ISODateString, public user?: User) {}
  })(expiresDate.toDateString(), user);
};
