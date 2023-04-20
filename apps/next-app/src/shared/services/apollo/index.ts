import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL}`,
});

const authLink = setContext((_, { headers }) => {
  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  return { headers: { ...headers, authorization: apiKey, apikey: apiKey } };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
