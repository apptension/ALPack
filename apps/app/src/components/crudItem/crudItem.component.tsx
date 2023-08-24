'use client';

import { useMutation } from '@apollo/client';
import { ActionIcon, Card, Group, Text } from '@mantine/core';
import { IconTrashX } from '@tabler/icons-react';
import { MouseEvent } from 'react';

import { CrudItem as CrudItemType } from '@ab/api-client';
import { Link } from '@ab/core/components';

import { allCrudItemsQuery } from '../../app/crud/crud.graphql';
import { deleteCrudItemMutation } from './crudItem.graphql';

export interface CrudItemProps {
  crudItem: CrudItemType;
}

export const CrudItem = ({ crudItem }: CrudItemProps) => {
  const [commitDeleteMutation, { loading }] = useMutation(deleteCrudItemMutation);

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    commitDeleteMutation({
      variables: {
        deleteCrudItemData: { id: crudItem.id },
      },
      update(cache, { data }) {
        if (!data.deleteCrudItem?.affected) {
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

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Link
          linkProps={{
            href: `/crud/${crudItem.id}`,
          }}
          buttonProps={{
            variant: 'white',
          }}
        >
          <Text weight={500}>{crudItem.name}</Text>
        </Link>
        <ActionIcon disabled={loading} onClick={handleDelete} variant="subtle">
          <IconTrashX />
        </ActionIcon>
      </Group>
    </Card>
  );
};
