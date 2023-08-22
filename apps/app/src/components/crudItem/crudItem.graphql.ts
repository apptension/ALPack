import { gql } from "@apollo/client"

export const deleteCrudItemMutation = gql`
mutation DeleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {
    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {
      affected
    }
  }
`