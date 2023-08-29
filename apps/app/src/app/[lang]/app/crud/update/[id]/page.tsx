'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useIntl } from 'react-intl';

import { PageHeadline, PageLayout } from '@ab/core/components';

import { detailsCrudItemQuery } from '../../[id]/details.graphql';
import { EditCrudItem } from './updateCrudItem';

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
        hasBackButton
        header={formatMessage({ defaultMessage: 'Update CRUD Item', id: 'Update CRUD item / Page / Headline' })}
      />
      <EditCrudItem crudItem={data?.crudItem} />
    </PageLayout>
  );
}
