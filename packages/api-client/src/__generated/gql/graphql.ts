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

export type PhotosQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotosQueryQuery = { __typename?: 'Query', allPhotos: Array<{ __typename?: 'Photo', id: string }> };


export const TestQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"testQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPhotos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TestQueryQuery, TestQueryQueryVariables>;
export const PhotosQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"photosQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPhotos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PhotosQueryQuery, PhotosQueryQueryVariables>;