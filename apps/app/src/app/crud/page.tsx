import { Suspense } from 'react';

import { PageHeadline, PageLayout } from '@ab/core/components';

import { CrudList, LoadingSkeleton } from './crudList';

export default async function Page() {
  return (
    <PageLayout>
      <PageHeadline header="CRUD items list" />
      <Suspense fallback={<LoadingSkeleton />}>
        <CrudList />
      </Suspense>
    </PageLayout>
  );
}
