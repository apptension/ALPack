import { gql } from "@apollo/client";

export const addCRUDItemMutation = gql`
    mutation AddCrudItem($newCrudItemData: AddCRUDItemInput!) {
        addCrudItem(newCrudItemData: $newCrudItemData) {
            id
            name
        }
    }
`