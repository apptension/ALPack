import { gql } from '@vm/api-client/__generated/gql';

export const postsQuery = gql(/* GraphQL */`
    query postsQuery {
        posts {
            id
            title
        }
    }
`);