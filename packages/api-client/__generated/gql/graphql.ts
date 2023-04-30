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

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
};

export type PostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQueryQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string }> };


export const PostsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"postsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<PostsQueryQuery, PostsQueryQueryVariables>;