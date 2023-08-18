import { IRules } from 'graphql-shield';

import { isAdmin, isAuthenticated } from '@ab/schema/auth/rules';

export const photoPermissions = {
  Query: {
    allPhotos: isAuthenticated,
    photo: isAuthenticated,
  },
  Mutation: {
    addPhoto: isAdmin,
  },
  Photo: isAuthenticated,
} as IRules;
