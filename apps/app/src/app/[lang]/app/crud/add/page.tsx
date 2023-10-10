'use client';

import { useIntl } from 'react-intl';

import { PageHeadline, PageLayout } from '@alp/core/components';

import { AddCrudItem } from './addCrudItem';

export default function Page() {
  const { formatMessage } = useIntl();

  return (
    <PageLayout>
      <PageHeadline
        header={formatMessage({ defaultMessage: 'Add new CRUD item', id: 'Add CRUD Item / Page / Headline' })}
        hasBackButton
      />
      <AddCrudItem />
    </PageLayout>
  );
}
