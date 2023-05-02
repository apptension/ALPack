import { gql } from '@vm/api-client/__generated/gql';

export const projectsQuery = gql(/* GraphQL */`
    query projectsQuery {
        projects {
            id
            name
        }
    }
`);