import { CrudItem } from '@ab/api-client';
import { getClient } from '@ab/api-client/client/server';
import { PageHeadline, PageLayout } from '@ab/core/components';

import { detailsCrudItemQuery } from '../../[id]/details.graphql';
import { EditCrudItem } from './updateCrudItem';

export default async function Page({ params }: { params: { id: string } }) {
  const result = await getClient().query<{ crudItem: CrudItem }>({
    query: detailsCrudItemQuery,
    variables: {
      crudItemId: params.id,
    },
  });

  return (
    <PageLayout>
      <PageHeadline hasBackButton header="Update CRUD Item" />
      <EditCrudItem result={result} />
    </PageLayout>
  );
}
