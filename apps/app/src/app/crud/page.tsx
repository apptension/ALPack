import { CrudItem } from '@ab/api-client';
import { getClient } from '@ab/api-client/client/server';

import { allCrudItemsQuery } from './crud.graphql';
import { CrudList } from './crudList';

export default async function Page() {
  const result = await getClient().query<{
    allCrudItems: CrudItem[];
  }>({ query: allCrudItemsQuery });

  return <CrudList result={result} />;
}
