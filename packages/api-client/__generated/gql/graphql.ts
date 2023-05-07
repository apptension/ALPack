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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Environment = Node & {
  __typename?: 'Environment';
  currentVersion?: Maybe<Version>;
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  versions: EnvironmentVersionsConnection;
};


export type EnvironmentVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type EnvironmentInput = {
  name: Scalars['String'];
  projectId: Scalars['String'];
};

export type EnvironmentVersionsConnection = {
  __typename?: 'EnvironmentVersionsConnection';
  edges: Array<Maybe<EnvironmentVersionsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type EnvironmentVersionsConnectionEdge = {
  __typename?: 'EnvironmentVersionsConnectionEdge';
  cursor: Scalars['String'];
  node: Version;
};

export type Error = {
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEnvironment: MutationCreateEnvironmentResult;
  createProject: MutationCreateProjectResult;
  createService: MutationCreateServiceResult;
  createVersion: MutationCreateVersionResult;
};


export type MutationCreateEnvironmentArgs = {
  input: EnvironmentInput;
};


export type MutationCreateProjectArgs = {
  input: ProjectInput;
};


export type MutationCreateServiceArgs = {
  input: ServiceInput;
};


export type MutationCreateVersionArgs = {
  input: VersionInput;
};

export type MutationCreateEnvironmentResult = MutationCreateEnvironmentSuccess | ValidationError;

export type MutationCreateEnvironmentSuccess = {
  __typename?: 'MutationCreateEnvironmentSuccess';
  data: Environment;
};

export type MutationCreateProjectResult = MutationCreateProjectSuccess | ValidationError;

export type MutationCreateProjectSuccess = {
  __typename?: 'MutationCreateProjectSuccess';
  data: Project;
};

export type MutationCreateServiceResult = MutationCreateServiceSuccess | ValidationError;

export type MutationCreateServiceSuccess = {
  __typename?: 'MutationCreateServiceSuccess';
  data: Service;
};

export type MutationCreateVersionResult = MutationCreateVersionSuccess | ValidationError;

export type MutationCreateVersionSuccess = {
  __typename?: 'MutationCreateVersionSuccess';
  data: Version;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Project = Node & {
  __typename?: 'Project';
  environments: ProjectEnvironmentsConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  services: ProjectServicesConnection;
};


export type ProjectEnvironmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectServicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProjectEnvironmentsConnection = {
  __typename?: 'ProjectEnvironmentsConnection';
  edges: Array<Maybe<ProjectEnvironmentsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type ProjectEnvironmentsConnectionEdge = {
  __typename?: 'ProjectEnvironmentsConnectionEdge';
  cursor: Scalars['String'];
  node: Environment;
};

export type ProjectInput = {
  name: Scalars['String'];
};

export type ProjectServicesConnection = {
  __typename?: 'ProjectServicesConnection';
  edges: Array<Maybe<ProjectServicesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type ProjectServicesConnectionEdge = {
  __typename?: 'ProjectServicesConnectionEdge';
  cursor: Scalars['String'];
  node: Service;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  project: Project;
  projects: Array<Project>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};

export type Service = Node & {
  __typename?: 'Service';
  currentVersion?: Maybe<ServiceVersion>;
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  versions: ServiceVersionsConnection;
};


export type ServiceVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ServiceInput = {
  name: Scalars['String'];
  projectId: Scalars['String'];
};

export type ServiceVersion = Node & {
  __typename?: 'ServiceVersion';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isCurrent: Scalars['Boolean'];
  name: Scalars['String'];
  service: Service;
  version: Version;
};

export type ServiceVersionsConnection = {
  __typename?: 'ServiceVersionsConnection';
  edges: Array<Maybe<ServiceVersionsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type ServiceVersionsConnectionEdge = {
  __typename?: 'ServiceVersionsConnectionEdge';
  cursor: Scalars['String'];
  node: ServiceVersion;
};

export type ValidationError = Error & {
  __typename?: 'ValidationError';
  fieldErrors: Array<ValidationFieldError>;
  message: Scalars['String'];
};

export type ValidationFieldError = {
  __typename?: 'ValidationFieldError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type Version = Node & {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  environment: Environment;
  id: Scalars['ID'];
  isCurrent: Scalars['Boolean'];
  name: Scalars['String'];
  serviceVersions: VersionServiceVersionsConnection;
};


export type VersionServiceVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type VersionInput = {
  environmentId: Scalars['String'];
  isCurrent: Scalars['Boolean'];
  name: Scalars['String'];
};

export type VersionServiceVersionsConnection = {
  __typename?: 'VersionServiceVersionsConnection';
  edges: Array<Maybe<VersionServiceVersionsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type VersionServiceVersionsConnectionEdge = {
  __typename?: 'VersionServiceVersionsConnectionEdge';
  cursor: Scalars['String'];
  node: ServiceVersion;
};

export type ProjectQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProjectQueryQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: string, name: string, environments: { __typename?: 'ProjectEnvironmentsConnection', edges: Array<{ __typename?: 'ProjectEnvironmentsConnectionEdge', node: { __typename?: 'Environment', id: string, name: string, currentVersion?: { __typename?: 'Version', name: string, id: string, createdAt: any } | null } } | null> }, services: { __typename?: 'ProjectServicesConnection', edges: Array<{ __typename?: 'ProjectServicesConnectionEdge', node: { __typename?: 'Service', name: string } } | null> } } };

export type ProjectFragmentFragment = { __typename?: 'Project', id: string, name: string, environments: { __typename?: 'ProjectEnvironmentsConnection', edges: Array<{ __typename?: 'ProjectEnvironmentsConnectionEdge', node: { __typename?: 'Environment', id: string } } | null> } } & { ' $fragmentName'?: 'ProjectFragmentFragment' };

export type NewProjectMutationMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type NewProjectMutationMutation = { __typename?: 'Mutation', createProject: { __typename: 'MutationCreateProjectSuccess', data: (
      { __typename?: 'Project' }
      & { ' $fragmentRefs'?: { 'ProjectFragmentFragment': ProjectFragmentFragment } }
    ) } | { __typename: 'ValidationError', message: string, fieldErrors: Array<{ __typename?: 'ValidationFieldError', message: string, path: Array<string> }> } };

export type ProjectsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQueryQuery = { __typename?: 'Query', projects: Array<(
    { __typename?: 'Project', id: string }
    & { ' $fragmentRefs'?: { 'ProjectFragmentFragment': ProjectFragmentFragment } }
  )> };

export const ProjectFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"environments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectFragmentFragment, unknown>;
export const ProjectQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"environments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"currentVersion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectQueryQuery, ProjectQueryQueryVariables>;
export const NewProjectMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"newProjectMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ValidationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"fieldErrors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationCreateProjectSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"environments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewProjectMutationMutation, NewProjectMutationMutationVariables>;
export const ProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"projectFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"projectFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Project"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"environments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectsQueryQuery, ProjectsQueryQueryVariables>;