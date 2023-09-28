import { IRules } from 'graphql-shield';

import { isAuthenticated } from '../../auth/rules';

export const userPermissions = {
  Query: {
    me: isAuthenticated,
  },
  Mutation: {
    updateProfile: isAuthenticated,
  },
  UserEntity: isAuthenticated,
} as IRules;
