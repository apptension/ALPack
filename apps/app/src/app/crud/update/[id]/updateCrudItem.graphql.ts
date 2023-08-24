import { gql } from "@ab/api-client";

export const updateCRUDItemMutation = gql(/* GraphQL */ `
    mutation UpdateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {
        updateCrudItem(updateCrudItemData: $updateCrudItemData) {
        id
        name
        }
    }
`);