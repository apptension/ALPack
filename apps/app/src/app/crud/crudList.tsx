'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { SimpleGrid, Skeleton } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { CrudItem as CrudItemType } from '@ab/api-client';
import { Link } from '@ab/core/components';

import { allCrudItemsQuery } from '@app/app/crud/crud.graphql';
import { CrudItem } from '@app/components/crudItem';
import { RoutesConfig } from '@app/config/routes';

export const LoadingSkeleton = () => (
  <SimpleGrid cols={4} spacing="sm" verticalSpacing="xs">
    <Skeleton height={96} />
    <Skeleton height={96} />
    <Skeleton height={96} />
    <Skeleton height={96} />
  </SimpleGrid>
);

export const CrudList = () => {
  const { data } = useSuspenseQuery(allCrudItemsQuery);

  return (
    <>
      <Link href={RoutesConfig.crudAdd} mb="md" leftIcon={<IconPlus />}>
        Add new CRUD item
      </Link>
      <SimpleGrid cols={4} spacing="sm" verticalSpacing="xs">
        {data?.allCrudItems.map((item: CrudItemType) => (
          <CrudItem key={item.id} crudItem={item} />
        ))}
      </SimpleGrid>
    </>
  );
};
