import { ApolloProvider as Provider } from '@apollo/client';

import { client } from '../../client';

export const ApolloProvider = ({ children }: any) => {
  return <Provider client={client}>{children}</Provider>;
};
