import { gql } from '@ab/api-client/__generated/gql';

export const photosQuery = gql(/* GraphQL */ `
  query photosQuery {
    allPhotos {
      id
    }
  }
`);

// export const projectFragment = gql(/* GraphQL */ `
//   fragment projectFragment on Project {
//     id
//     name
//     environments {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `);
//
// export const newProjectMutation = gql(/* GraphQL */ `
//   mutation newProjectMutation($name: String!) {
//     createProject(input: { name: $name }) {
//       __typename
//       ... on ValidationError {
//         message
//         fieldErrors {
//           message
//           path
//         }
//       }
//       ... on MutationCreateProjectSuccess {
//         data {
//           ...projectFragment
//         }
//       }
//     }
//   }
// `);
//
// export const projectsQuery = gql(/* GraphQL */ `
//   query projectsQuery {
//     projects {
//       id
//       ...projectFragment
//     }
//   }
// `);
