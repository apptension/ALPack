import { gql } from '@ab/api-client';

export const testQueryGraphql = gql(/* GraphQL */ `
  query testQuery {
    allPhotos {
      id
      name
    }
  }
`);
