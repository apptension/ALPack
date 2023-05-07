import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

import schema from '@vm/graphql/schema/cli';

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: '/api/cli/graphql',
});

export const config = {
  api: {
    bodyParser: false,
  },
};
