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
  project: Array<Project>;
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

export type ServiceVersion = Node & {
  __typename?: 'ServiceVersion';
  createdAt: Scalars['String'];
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

export type Version = Node & {
  __typename?: 'Version';
  createdAt: Scalars['String'];
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

export type ProjectsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQueryQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string }> };


export const ProjectsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProjectsQueryQuery, ProjectsQueryQueryVariables>;