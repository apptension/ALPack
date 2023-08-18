import { IRules, deny, shield } from 'graphql-shield';

import { crudItemPermissions } from '../resolvers/crudItem/crudItem.permissions';
import { photoPermissions } from '../resolvers/photo/photo.permissions';
import { isAuthenticated } from './rules';

export const defaultRules = {
  Query: {
    '*': isAuthenticated,
  },
  Mutation: {
    '*': isAuthenticated,
  },
  DeleteResult: isAuthenticated,
};

export const mergePermissions = (...perms: IRules[]): IRules => {
  return perms.reduce(
    (acc: any, rule: any) => ({
      ...acc,
      ...rule,
      Query: {
        ...acc.Query,
        ...rule.Query,
      },
      Mutation: {
        ...acc.Mutation,
        ...rule.Mutation,
      },
    }),
    { ...defaultRules }
  );
};

export const permissions = shield(mergePermissions(photoPermissions, crudItemPermissions), {
  fallbackRule: deny,
  allowExternalErrors: true,
});
