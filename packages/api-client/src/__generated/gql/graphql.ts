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
  deleteCrudItem: DeleteResult;
  updateCrudItem: CrudItem;
  updateProfile: UserEntity;
};


export type MutationAddCrudItemArgs = {
  newCrudItemData: AddCrudItemInput;
};


export type MutationDeleteCrudItemArgs = {
  deleteCrudItemData: DeleteCrudItemInput;
};


export type MutationUpdateCrudItemArgs = {
  updateCrudItemData: UpdateCrudItemInput;
};


export type MutationUpdateProfileArgs = {
  updateProfileData: UpdateProfileInput;
};

export type Query = {
  __typename?: 'Query';
  /** Return all crudItems from db */
  allCrudItems: Array<CrudItem>;
  crudItem: CrudItem;
  me: UserEntity;
};


export type QueryCrudItemArgs = {
  id: Scalars['ID'];
};

/** Update crudItem data */
export type UpdateCrudItemInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Update profile data */
export type UpdateProfileInput = {
  name: Scalars['String'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', me: { __typename?: 'UserEntity', id: string, name: string } };

export type UpdateProfileMutationVariables = Exact<{
  updateProfileData: UpdateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'UserEntity', id: string, name: string } };

export type AddCrudItemMutationVariables = Exact<{
  newCrudItemData: AddCrudItemInput;
}>;


export type AddCrudItemMutation = { __typename?: 'Mutation', addCrudItem: { __typename?: 'CRUDItem', id: string, name: string } };

export type CrudItemDetailsQueryVariables = Exact<{
  crudItemId: Scalars['ID'];
}>;


export type CrudItemDetailsQuery = { __typename?: 'Query', crudItem: { __typename?: 'CRUDItem', id: string, name: string } };

export type UpdateCrudItemMutationVariables = Exact<{
  updateCrudItemData: UpdateCrudItemInput;
}>;


export type UpdateCrudItemMutation = { __typename?: 'Mutation', updateCrudItem: { __typename?: 'CRUDItem', id: string, name: string } };

export type AllCrudItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCrudItemsQuery = { __typename?: 'Query', allCrudItems: Array<{ __typename?: 'CRUDItem', id: string, name: string }> };

export type DeleteCrudItemMutationVariables = Exact<{
  deleteCrudItemData: DeleteCrudItemInput;
}>;


export type DeleteCrudItemMutation = { __typename?: 'Mutation', deleteCrudItem: { __typename?: 'DeleteResult', affected: number } };


export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProfileData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateProfileData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProfileData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const AddCrudItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCrudItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newCrudItemData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCRUDItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCrudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newCrudItemData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newCrudItemData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddCrudItemMutation, AddCrudItemMutationVariables>;
export const CrudItemDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CrudItemDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"crudItemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"crudItemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CrudItemDetailsQuery, CrudItemDetailsQueryVariables>;
export const UpdateCrudItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCrudItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCrudItemData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCRUDItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCrudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCrudItemData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCrudItemData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateCrudItemMutation, UpdateCrudItemMutationVariables>;
export const AllCrudItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCrudItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCrudItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllCrudItemsQuery, AllCrudItemsQueryVariables>;
export const DeleteCrudItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCrudItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteCrudItemData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCRUDItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCrudItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteCrudItemData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteCrudItemData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected"}}]}}]}}]} as unknown as DocumentNode<DeleteCrudItemMutation, DeleteCrudItemMutationVariables>;