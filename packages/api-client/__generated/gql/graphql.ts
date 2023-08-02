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

/** New photo data */
export type AddPhotoInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPhoto: Photo;
};


export type MutationAddPhotoArgs = {
  data: AddPhotoInput;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Return all photos in db */
  allPhotos: Array<Photo>;
  photo: Photo;
};


export type QueryPhotoArgs = {
  id: Scalars['ID'];
};

export type PhotosQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotosQueryQuery = { __typename?: 'Query', allPhotos: Array<{ __typename?: 'Photo', id: string }> };


export const PhotosQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"photosQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPhotos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PhotosQueryQuery, PhotosQueryQueryVariables>;