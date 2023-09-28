import { User, authSessionFactory } from '@ab/graphql-api/tests/factories/authSession.factory';
import { UserRole } from '@ab/graphql-api/types';

import { AppTestProvidersProps } from '@app/tests/utils/rendering';

const defaultUserData = { email: 'user@example.com', role: UserRole.USER, name: 'User name', image: null };

export const sessionProviderFactory = (userData?: Partial<User>): AppTestProvidersProps['sessionProviderProps'] => {
  const user = userData ? { ...defaultUserData, ...userData } : userData;
  const data = authSessionFactory(user) ?? null;
  return {
    data,
    status: userData ? 'authenticated' : 'unauthenticated',
  };
};
