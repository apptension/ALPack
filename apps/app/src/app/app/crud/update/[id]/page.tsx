'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { PageHeadline, PageLayout } from '@ab/core/components';

import { detailsCrudItemQuery } from '../../[id]/details.graphql';
import { EditCrudItem } from './updateCrudItem';

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useSuspenseQuery(detailsCrudItemQuery, {
    variables: {
      crudItemId: params.id,
    },
  });
  return (
    <PageLayout>
      <PageHeadline hasBackButton header="Update CRUD Item" />
      <EditCrudItem crudItem={data?.crudItem} />
    </PageLayout>
  );
}
