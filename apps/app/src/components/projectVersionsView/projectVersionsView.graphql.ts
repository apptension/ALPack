import { gql } from '@vm/api-client/__generated/gql';

export const projectsQuery = gql(/* GraphQL */ `
  query projectQuery($id: ID!) {
    project(id: $id) {
      id
      name
      environments {
        edges {
          node {
            id
            name
            currentVersion {
              name
              id
              createdAt
            }
          }
        }
      }
      services {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`);
