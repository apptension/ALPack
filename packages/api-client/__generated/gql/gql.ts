/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query projectQuery($id: ID!) {\n    project(id: $id) {\n      id\n      name\n      environments {\n        edges {\n          node {\n            id\n            name\n            currentVersion {\n              name\n              id\n              createdAt\n            }\n          }\n        }\n      }\n      services {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.ProjectQueryDocument,
    "\n  fragment projectFragment on Project {\n    id\n    name\n    environments {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n": types.ProjectFragmentFragmentDoc,
    "\n  mutation newProjectMutation($name: String!) {\n    createProject(input: { name: $name }) {\n      __typename\n      ... on ValidationError {\n        message\n        fieldErrors {\n          message\n          path\n        }\n      }\n      ... on MutationCreateProjectSuccess {\n        data {\n          ...projectFragment\n        }\n      }\n    }\n  }\n": types.NewProjectMutationDocument,
    "\n  query projectsQuery {\n    projects {\n      id\n      ...projectFragment\n    }\n  }\n": types.ProjectsQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query projectQuery($id: ID!) {\n    project(id: $id) {\n      id\n      name\n      environments {\n        edges {\n          node {\n            id\n            name\n            currentVersion {\n              name\n              id\n              createdAt\n            }\n          }\n        }\n      }\n      services {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query projectQuery($id: ID!) {\n    project(id: $id) {\n      id\n      name\n      environments {\n        edges {\n          node {\n            id\n            name\n            currentVersion {\n              name\n              id\n              createdAt\n            }\n          }\n        }\n      }\n      services {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment projectFragment on Project {\n    id\n    name\n    environments {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment projectFragment on Project {\n    id\n    name\n    environments {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation newProjectMutation($name: String!) {\n    createProject(input: { name: $name }) {\n      __typename\n      ... on ValidationError {\n        message\n        fieldErrors {\n          message\n          path\n        }\n      }\n      ... on MutationCreateProjectSuccess {\n        data {\n          ...projectFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation newProjectMutation($name: String!) {\n    createProject(input: { name: $name }) {\n      __typename\n      ... on ValidationError {\n        message\n        fieldErrors {\n          message\n          path\n        }\n      }\n      ... on MutationCreateProjectSuccess {\n        data {\n          ...projectFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query projectsQuery {\n    projects {\n      id\n      ...projectFragment\n    }\n  }\n"): (typeof documents)["\n  query projectsQuery {\n    projects {\n      id\n      ...projectFragment\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;