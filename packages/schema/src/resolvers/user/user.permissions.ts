import { IRules } from 'graphql-shield';

import { isAuthenticated } from '@ab/schema/auth/rules';

export const userPermissions = {
  Query: {
    me: isAuthenticated,
  },
  Mutation: {
    updateProfile: isAuthenticated,
  },
  UserEntity: isAuthenticated,
} as IRules;
