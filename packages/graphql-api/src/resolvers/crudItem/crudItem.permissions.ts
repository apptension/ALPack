import { IRules } from 'graphql-shield';

import { isAdmin, isAuthenticated } from '../../auth/rules';

export const crudItemPermissions = {
  Query: {
    allCrudItems: isAuthenticated,
    crudItem: isAuthenticated,
  },
  Mutation: {
    addCrudItem: isAdmin,
    updateCrudItem: isAdmin,
    deleteCrudItem: isAdmin,
  },
  CRUDItem: isAuthenticated,
} as IRules;
