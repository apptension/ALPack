'use client';

import { useIntl } from 'react-intl';

import { PageHeadline, PageLayout } from '@ab/core/components';

import { CrudList } from './crudList';

export default function Page() {
  const { formatMessage } = useIntl();
  return (
    <PageLayout>
      <PageHeadline header={formatMessage({ defaultMessage: 'CRUD items list', id: 'CRUD List Page / Headline' })} />
      <CrudList />
    </PageLayout>
  );
}
