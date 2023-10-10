'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { SimpleGrid } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CrudItem as CrudItemType } from '@alp/api-client';
import { Link, Tooltip } from '@alp/core/components';
import { UserRole } from '@alp/graphql-api/types';

import { CrudItem } from '@app/components/crudItem';
import { RoutesConfig } from '@app/config/routes';
import { allCrudItemsQuery } from '@app/graphql';
import { useUserRole } from '@app/hooks';

export const CrudList = () => {
  const userRole = useUserRole();
  const { formatMessage } = useIntl();
  const addMessage = formatMessage({
    defaultMessage: 'You need to have an admin role to add item',
    id: 'CrudList / Add New Item / Tooltip',
  });
  const { data } = useSuspenseQuery(allCrudItemsQuery);

  const notAdmin = userRole !== UserRole.ADMIN;
  return (
    <>
      <Tooltip label={notAdmin ? addMessage : ''} opened={notAdmin} position="bottom" withArrow>
        <Link href={RoutesConfig.crudAdd} mb="md" leftIcon={<IconPlus />} disabled={notAdmin}>
          <FormattedMessage defaultMessage="Add new CRUD item" id="CrudList / Add New Item / Link" />
        </Link>
      </Tooltip>
      <SimpleGrid cols={4} spacing="sm" verticalSpacing="xs">
        {data?.allCrudItems.map((item: CrudItemType) => (
          <CrudItem key={item.id} crudItem={item} />
        ))}
      </SimpleGrid>
    </>
  );
};
