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
    "\n  query testQuery {\n    allPhotos {\n      id\n      name\n    }\n  }\n": types.TestQueryDocument,
    "\n    query CrudItemDetails($crudItemId: ID!) {\n        crudItem(id: $crudItemId) {\n        id\n        name\n        }\n    }\n": types.CrudItemDetailsDocument,
    "\n  mutation AddCrudItem($newCrudItemData: AddCRUDItemInput!) {\n    addCrudItem(newCrudItemData: $newCrudItemData) {\n      id\n      name\n    }\n  }\n": types.AddCrudItemDocument,
    "\n  query AllCrudItems {\n    allCrudItems {\n      id\n      name\n    }\n  }\n": types.AllCrudItemsDocument,
    "\n    mutation UpdateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {\n        updateCrudItem(updateCrudItemData: $updateCrudItemData) {\n        id\n        name\n        }\n    }\n": types.UpdateCrudItemDocument,
    "\nmutation DeleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {\n    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {\n      affected\n    }\n  }\n": types.DeleteCrudItemDocument,
    "\n  query photosQuery {\n    allPhotos {\n      id\n    }\n  }\n": types.PhotosQueryDocument,
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
export function gql(source: "\n  query testQuery {\n    allPhotos {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query testQuery {\n    allPhotos {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query CrudItemDetails($crudItemId: ID!) {\n        crudItem(id: $crudItemId) {\n        id\n        name\n        }\n    }\n"): (typeof documents)["\n    query CrudItemDetails($crudItemId: ID!) {\n        crudItem(id: $crudItemId) {\n        id\n        name\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddCrudItem($newCrudItemData: AddCRUDItemInput!) {\n    addCrudItem(newCrudItemData: $newCrudItemData) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation AddCrudItem($newCrudItemData: AddCRUDItemInput!) {\n    addCrudItem(newCrudItemData: $newCrudItemData) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllCrudItems {\n    allCrudItems {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query AllCrudItems {\n    allCrudItems {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {\n        updateCrudItem(updateCrudItemData: $updateCrudItemData) {\n        id\n        name\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {\n        updateCrudItem(updateCrudItemData: $updateCrudItemData) {\n        id\n        name\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {\n    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {\n      affected\n    }\n  }\n"): (typeof documents)["\nmutation DeleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {\n    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {\n      affected\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query photosQuery {\n    allPhotos {\n      id\n    }\n  }\n"): (typeof documents)["\n  query photosQuery {\n    allPhotos {\n      id\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;