import { ApolloClient, InMemoryCache, Observable, ServerError, from } from '@apollo/client';
// import { GraphQLErrors, NetworkError } from '@apollo/client/errors';
// import { FetchResult } from '@apollo/client/link/core';
// import { onError } from "@apollo/client/link/error";
import { RetryLink } from '@apollo/client/link/retry';
// import {
//   relayStylePagination,
// } from "@apollo/client/utilities";
import { createUploadLink } from 'apollo-upload-client';

import { apiURL } from './helpers';
import { Emitter } from './utils/eventEmitter';

const isLocalEnv = process.env.NODE_ENV !== 'production';

export const emitter = new Emitter();

const httpApiLink = createUploadLink({
  uri: apiURL('/graphql'),
});

// todo: add refresh login logic

// const handleApiErrors = (
//   callRefresh: () => Observable<FetchResult> | void,
//   graphQLErrors?: GraphQLErrors,
//   networkError?: NetworkError
// ) => {
//   if (graphQLErrors) {
//     for (const err of graphQLErrors) {
//       switch (err.extensions?.["code"]) {
//         case "UNAUTHENTICATED":
//           return callRefresh();
//         default:
//           isLocalEnv && console.log(`[GraphQL error]`, err);
//       }
//     }
//   }
//
//   if (networkError) {
//     const result = (networkError as ServerError).result;
//     if (result && result?.["code"]?.code === "token_not_valid") {
//       return callRefresh();
//     }
//     isLocalEnv && console.log(`[Network error]: ${networkError}`);
//   }
// };

// const refreshTokenLink = onError(
//   ({ graphQLErrors, networkError, operation, forward }) => {
//     const callRefresh = (): Observable<FetchResult> | void =>
//       new Observable((observer) => {
//         (async () => {
//           try {
//             await auth.refreshToken();
//
//             // Retry the failed request
//             const subscriber = {
//               next: observer.next.bind(observer),
//               error: observer.error.bind(observer),
//               complete: observer.complete.bind(observer),
//             };
//
//             forward(operation).subscribe(subscriber);
//           } catch (err) {
//             observer.error(err);
//           }
//         })();
//       });
//
//     return handleApiErrors(callRefresh, graphQLErrors, networkError);
//   }
// );

const maxRetryAttempts = 5;

const retryLink = new RetryLink({
  delay: () => 1000,
  attempts: (count, operation, error) => {
    return !!error && count < maxRetryAttempts;
  },
});

export const client = new ApolloClient({
  connectToDevTools: isLocalEnv,
  // link: from([retryLink, refreshTokenLink, httpApiLink]),
  link: from([retryLink, httpApiLink]),
  cache: new InMemoryCache({
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       allNotifications: relayStylePagination(),
    //     },
    //   },
    // },
  }),
});

export const invalidateApolloStore = () => {
  client.stop();
  client.resetStore();
};
