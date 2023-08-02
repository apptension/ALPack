import { client } from '@ab/api-client/client';
import { ApolloProvider as Provider } from '@apollo/client';

export const ApolloProvider = ({ children }: any) => {
  return <Provider client={client}>{children}</Provider>;
};
