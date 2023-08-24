'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { PageHeadline, PageLayout } from '@ab/core/components';

import { CrudDetails } from './crudDetails';
import { detailsCrudItemQuery } from './details.graphql';

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useSuspenseQuery(detailsCrudItemQuery, {
    variables: {
      crudItemId: params.id,
    },
  });

  return (
    <PageLayout>
      <PageHeadline header="Details about item" hasBackButton />
      <CrudDetails crudItem={data?.crudItem} />
    </PageLayout>
  );
}
