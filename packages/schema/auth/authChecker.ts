import { AuthChecker } from 'type-graphql';

import { ApiContextType, UserRole } from '../types';

export const authChecker: AuthChecker<ApiContextType> = ({ context: { authSession } }, roles) => {
  if (!authSession) {
    return false;
  }

  if (roles.length === 0) {
    return true;
  }

  const { role } = authSession.user;

  if (role === UserRole.ADMIN && roles.includes(UserRole.USER)) {
    return true;
  }

  return roles.includes(role);
};
