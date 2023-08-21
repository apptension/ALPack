'use client';

import { ApolloQueryResult } from '@apollo/client';
import { SimpleGrid, Skeleton } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { CrudItem as CrudItemType } from '@ab/api-client';
import { Link } from '@ab/core/components';

import { CrudItem } from '@app/components/crudItem';
import { RoutesConfig } from '@app/config/routes';

export interface CrudListProps {
  result: ApolloQueryResult<{
    allCrudItems: CrudItemType[];
  }>;
}

export const CrudList = ({ result }: CrudListProps) => {
  const { data, loading } = result;

  const renderSkeleton = () => (
    <SimpleGrid cols={4} spacing="sm" verticalSpacing="xs">
      <Skeleton height={96} />
      <Skeleton height={96} />
      <Skeleton height={96} />
      <Skeleton height={96} />
    </SimpleGrid>
  );

  if (loading) return renderSkeleton();

  return (
    <>
      <Link
        linkProps={{
          href: RoutesConfig.crudAdd,
        }}
        buttonProps={{
          mb: 'md',
          leftIcon: <IconPlus />,
        }}
      >
        Add new CRUD item
      </Link>
      <SimpleGrid cols={4} spacing="sm" verticalSpacing="xs">
        {data.allCrudItems.map((item: CrudItemType) => (
          <CrudItem key={item.id} crudItem={item} />
        ))}
      </SimpleGrid>
    </>
  );
};
