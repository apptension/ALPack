import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useState } from 'react';

export const ApolloProvider = ({ children }: any) => {
  const getHeaders = async () => {
    const headers: Record<string, string> = {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    };

    return headers;
  };

  const [client] = useState(() => {
    const httpLink = createHttpLink({
      uri: `${process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL}`,
    });

    const authLink = setContext(async (_, { headers }) => {
      const authHeaders = await getHeaders();
      return { headers: { ...headers, ...authHeaders } };
    });

    const apolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    return apolloClient;
  });

  return <Provider client={client}>{children}</Provider>;
};
