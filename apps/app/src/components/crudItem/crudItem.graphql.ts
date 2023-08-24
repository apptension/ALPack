import { gql } from "@ab/api-client"

export const deleteCrudItemMutation = gql(/* GraphQL */ `
mutation DeleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {
    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {
      affected
    }
  }
`)