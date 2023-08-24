/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** New crudItem data */
export type AddCrudItemInput = {
  name: Scalars['String'];
};

/** New photo data */
export type AddPhotoInput = {
  name: Scalars['String'];
};

export type CrudItem = {
  __typename?: 'CRUDItem';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Delete crudItem */
export type DeleteCrudItemInput = {
  id: Scalars['String'];
};

export type DeleteResult = {
  __typename?: 'DeleteResult';
  affected: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCrudItem: CrudItem;
  addPhoto: Photo;
  deleteCrudItem: DeleteResult;
  updateCrudItem: CrudItem;
};


export type MutationAddCrudItemArgs = {
  newCrudItemData: AddCrudItemInput;
};


export type MutationAddPhotoArgs = {
  data: AddPhotoInput;
};


export type MutationDeleteCrudItemArgs = {
  deleteCrudItemData: DeleteCrudItemInput;
};


export type MutationUpdateCrudItemArgs = {
  updateCrudItemData: UpdateCrudItemInput;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Return all crudItems from db */
  allCrudItems: Array<CrudItem>;
  /** Return all photos in db */
  allPhotos: Array<Photo>;
  crudItem: CrudItem;
  photo: Photo;
};


export type QueryCrudItemArgs = {
  id: Scalars['ID'];
};


export type QueryPhotoArgs = {
  id: Scalars['ID'];
};

/** Update crudItem data */
export type UpdateCrudItemInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TestQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQueryQuery = { __typename?: 'Query', allPhotos: Array<{ __typename?: 'Photo', id: string, name: string }> };

export type CrudItemDetailsQueryVariables = Exact<{
  crudItemId: Scalars['ID'];
}>;


export type CrudItemDetailsQuery = { __typename?: 'Query', crudItem: { __typename?: 'CRUDItem', id: string, name: string } };

export type AddCrudItemMutationVariables = Exact<{
  newCrudItemData: AddCrudItemInput;
}>;


export type AddCrudItemMutation = { __typename?: 'Mutation', addCrudItem: { __typename?: 'CRUDItem', id: string, name: string } };

export type AllCrudItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCrudItemsQuery = { __typename?: 'Query', allCrudItems: Array<{ __typename?: 'CRUDItem', id: string, name: string }> };

export type UpdateCrudItemMutationVariables = Exact<{
  updateCrudItemData: UpdateCrudItemInput;
}>;


export type UpdateCrudItemMutation = { __typename?: 'Mutation', updateCrudItem: { __typename?: 'CRUDItem', id: string, name: string } };

export type DeleteCrudItemMutationVariables = Exact<{
  deleteCrudItemData: DeleteCrudItemInput;
}>;


export type DeleteCrudItemMutation = { __typename?: 'Mutation', deleteCrudItem: { __typename?: 'DeleteResult', affected: number } };

export type PhotosQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotosQueryQuery = { __typename?: 'Query', allPhotos: Array<{ __typename?: 'Photo', id: string }> };


export const TestQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"testQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPhotos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TestQueryQuery, TestQueryQueryVariables>;
export const CrudItemDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrudItemDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"crudItemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"crudItemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CrudItemDetailsQuery, CrudItemDetailsQueryVariables>;
export const AddCrudItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCrudItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newCrudItemData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCRUDItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCrudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newCrudItemData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newCrudItemData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddCrudItemMutation, AddCrudItemMutationVariables>;
export const AllCrudItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCrudItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCrudItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllCrudItemsQuery, AllCrudItemsQueryVariables>;
export const UpdateCrudItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCrudItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCrudItemData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCRUDItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCrudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCrudItemData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCrudItemData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateCrudItemMutation, UpdateCrudItemMutationVariables>;
export const DeleteCrudItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCrudItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteCrudItemData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCRUDItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCrudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteCrudItemData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteCrudItemData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected"}}]}}]}}]} as unknown as DocumentNode<DeleteCrudItemMutation, DeleteCrudItemMutationVariables>;
export const PhotosQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"photosQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPhotos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PhotosQueryQuery, PhotosQueryQueryVariables>;