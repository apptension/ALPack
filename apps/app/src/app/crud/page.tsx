import { PageHeadline, PageLayout } from '@ab/core/components';

import { CrudList } from './crudList';

export default async function Page() {
  return (
    <PageLayout>
      <PageHeadline header="CRUD items list" />
      <CrudList />
    </PageLayout>
  );
}
