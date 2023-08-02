import { unwrapResolverError } from '@apollo/server/errors';
import type { GraphQLFormattedError } from 'graphql';
import { ArgumentValidationError } from 'type-graphql';

import { ValidationError } from './validationError';

export const formatError = (formattedError: GraphQLFormattedError, error: unknown): GraphQLFormattedError => {
  const originalError = unwrapResolverError(error);

  if (originalError instanceof ArgumentValidationError) {
    return new ValidationError(originalError.validationErrors);
  }

  return formattedError;
};
