'use client';

import { useMutation } from '@apollo/client';
import { ActionIcon, Card, Flex, Text } from '@mantine/core';
import { IconEdit, IconTrashX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

import { CrudItem as CrudItemType } from '@ab/api-client';
import { Link } from '@ab/core/components';

import { allCrudItemsQuery } from '../../app/app/crud/crud.graphql';
import { deleteCrudItemMutation } from './crudItem.graphql';

export interface CrudItemProps {
  crudItem: CrudItemType;
}

export const CrudItem = ({ crudItem }: CrudItemProps) => {
  const { push } = useRouter();

  const [commitDeleteMutation, { loading }] = useMutation(deleteCrudItemMutation, {
    refetchQueries: () => [allCrudItemsQuery],
  });

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    commitDeleteMutation({
      variables: {
        deleteCrudItemData: { id: crudItem.id },
      },
      update(cache, { data }) {
        if (!data?.deleteCrudItem?.affected) {
          return;
        }

        const { allCrudItems = [] } = cache.readQuery({ query: allCrudItemsQuery }) ?? {};
        const refItem = allCrudItems.find((item: CrudItemType) => item.id === crudItem.id);
        if (!refItem) {
          return;
        }

        cache.modify({
          fields: {
            allCrudItems(existingItems = []) {
              return existingItems.filter((item: CrudItemType) => item.id !== refItem.id);
            },
          },
        });
      },
    });
  };

  const handleUpdateRedirect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    push(`/app/crud/update/${crudItem.id}`);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Flex w="100%" justify="center" align="center">
        <Link href={`/app/crud/${crudItem.id}`} variant="white">
          <Text weight={500}>{crudItem.name}</Text>
        </Link>
        <ActionIcon onClick={handleUpdateRedirect} variant="subtle">
          <IconEdit />
        </ActionIcon>

        <ActionIcon disabled={loading} onClick={handleDelete} variant="subtle">
          <IconTrashX />
        </ActionIcon>
      </Flex>
    </Card>
  );
};
