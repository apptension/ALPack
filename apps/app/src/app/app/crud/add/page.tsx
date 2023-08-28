import { PageHeadline, PageLayout } from '@ab/core/components';

import { AddCrudItem } from './addCrudItem';

export default async function Page() {
  return (
    <PageLayout>
      <PageHeadline header="Add new CRUD item" hasBackButton />
      <AddCrudItem />
    </PageLayout>
  );
}
