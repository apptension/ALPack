import { rule } from 'graphql-shield';

import { UserRole } from '../types';

export const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.authSession !== null;
});

export const isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.authSession?.user?.role === UserRole.ADMIN;
});
