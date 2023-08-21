import { CrudItem } from '@ab/api-client';
import { getClient } from '@ab/api-client/client/server';
import { PageHeadline, PageLayout } from '@ab/core/components';

import { allCrudItemsQuery } from './crud.graphql';
import { CrudList } from './crudList';

export default async function Page() {
  const result = await getClient().query<{
    allCrudItems: CrudItem[];
  }>({ query: allCrudItemsQuery });

  return (
    <PageLayout>
      <PageHeadline header="CRUD items list" />
      <CrudList result={result} />
    </PageLayout>
  );
}
