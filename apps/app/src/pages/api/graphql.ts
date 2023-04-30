import { createYoga } from 'graphql-yoga'
import schema from '@vm/graphql/schema'
import type { NextApiRequest, NextApiResponse } from 'next'

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  graphqlEndpoint: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false
  }
}
