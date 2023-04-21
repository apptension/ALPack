import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const getApolloServerClient = (authToken?: string) => {
  const authHeaders: Record<string, string> = {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  };

  if (authToken) {
    authHeaders['authorization'] = `Bearer ${authToken}`;
  }

  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL}`,
  });

  const authLink = setContext(async (_, { headers }) => {
    return { headers: { ...headers, ...authHeaders } };
  });

  return new ApolloClient({
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
