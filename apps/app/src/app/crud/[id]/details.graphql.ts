import { gql } from '@ab/api-client';


export const detailsCrudItemQuery = gql(/* GraphQL */ `
    query CrudItemDetails($crudItemId: ID!) {
        crudItem(id: $crudItemId) {
        id
        name
        }
    }
`);