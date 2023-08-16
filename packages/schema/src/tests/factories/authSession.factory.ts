import { DefaultSession } from 'next-auth';

import { ApiContextType, UserRole } from '../../types';

type RoleExtension = { role?: UserRole } | undefined;
export type User = (RoleExtension & DefaultSession['user']) | undefined;

export const authSessionFactory = (userData?: Partial<User>): ApiContextType['authSession'] => {
  const expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() + 1);

  const user: User = userData
    ? {
        role: UserRole.USER,
        name: null,
        email: null,
        image: null,
        ...userData,
      }
    : undefined;

  // @ts-ignore
  return { expires: expiresDate.toDateString(), user };
};
