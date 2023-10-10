'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useIntl } from 'react-intl';

import { PageHeadline, PageLayout } from '@alp/core/components';

import { detailsCrudItemQuery } from '../../../../../graphql';
import { CrudDetails } from './crudDetails';

export default function Page({ params }: { params: { id: string } }) {
  const { formatMessage } = useIntl();

  const { data } = useSuspenseQuery(detailsCrudItemQuery, {
    variables: {
      crudItemId: params.id,
    },
  });
  return (
    <PageLayout>
      <PageHeadline
        header={formatMessage({ defaultMessage: 'Details about item', id: 'Details CRUD item / Page / Headline' })}
        hasBackButton
      />
      <CrudDetails crudItem={data?.crudItem} />
    </PageLayout>
  );
}
