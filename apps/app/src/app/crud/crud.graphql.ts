import { gql } from '@ab/api-client';

export const allCrudItemsQuery = gql(/* GraphQL */ `
  query AllCrudItems {
    allCrudItems {
      id
      name
    }
  }
`);
