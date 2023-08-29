import { gql } from '@ab/api-client';

export const addCRUDItemMutation = gql(/* GraphQL */ `
  mutation AddCrudItem($newCrudItemData: AddCRUDItemInput!) {
    addCrudItem(newCrudItemData: $newCrudItemData) {
      id
      name
    }
  }
`);
