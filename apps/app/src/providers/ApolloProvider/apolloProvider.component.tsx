import { ApolloProvider as Provider } from '@apollo/client';
import { client } from '@vm/api-client/client';

export const ApolloProvider = ({ children }: any) => {
  return <Provider client={client}>{children}</Provider>;
};
