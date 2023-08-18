'use client';

import { ActionIcon, Card, Group, Text } from '@mantine/core';
import { IconTrashX } from '@tabler/icons-react';

import { CrudItem as CrudItemType } from '@ab/api-client';

export interface CrudItemProps {
  crudItem: CrudItemType;
}

export const CrudItem = ({ crudItem }: CrudItemProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{crudItem.name}</Text>
        <ActionIcon variant="subtle">
          <IconTrashX />
        </ActionIcon>
      </Group>
    </Card>
  );
};
