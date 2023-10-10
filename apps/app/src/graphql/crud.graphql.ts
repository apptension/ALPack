import { gql } from '@alp/api-client';

export const addCRUDItemMutation = gql(/* GraphQL */ `
  mutation AddCrudItem($newCrudItemData: AddCRUDItemInput!) {
    addCrudItem(newCrudItemData: $newCrudItemData) {
      id
      name
    }
  }
`);

export const detailsCrudItemQuery = gql(/* GraphQL */ `
  query CrudItemDetails($crudItemId: ID!) {
    crudItem(id: $crudItemId) {
      id
      name
    }
  }
`);

export const updateCRUDItemMutation = gql(/* GraphQL */ `
  mutation UpdateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {
    updateCrudItem(updateCrudItemData: $updateCrudItemData) {
      id
      name
    }
  }
`);

export const allCrudItemsQuery = gql(/* GraphQL */ `
  query AllCrudItems {
    allCrudItems {
      id
      name
    }
  }
`);

export const deleteCrudItemMutation = gql(/* GraphQL */ `
  mutation DeleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {
    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {
      affected
    }
  }
`);
