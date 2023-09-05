'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { SimpleGrid } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { FormattedMessage } from 'react-intl';

import { CrudItem as CrudItemType } from '@ab/api-client';
import { Link } from '@ab/core/components';

import { CrudItem } from '@app/components/crudItem';
import { RoutesConfig } from '@app/config/routes';
import { allCrudItemsQuery } from '@app/graphql';

export const CrudList = () => {
  const { data } = useSuspenseQuery(allCrudItemsQuery);

  return (
    <>
      <Link href={RoutesConfig.crudAdd} mb="md" leftIcon={<IconPlus />}>
        <FormattedMessage defaultMessage="Add new CRUD item" id="CrudList / Add New Item / Link" />
      </Link>
      <SimpleGrid cols={4} spacing="sm" verticalSpacing="xs">
        {data?.allCrudItems.map((item: CrudItemType) => (
          <CrudItem key={item.id} crudItem={item} />
        ))}
      </SimpleGrid>
    </>
  );
};
