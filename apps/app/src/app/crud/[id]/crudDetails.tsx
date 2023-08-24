'use client';

import { Box, Text } from '@mantine/core';

import { CrudItem as CrudItemType } from '@ab/api-client';

export interface CrudDetailsProps {
  crudItem: CrudItemType;
}
export const CrudDetails = ({ crudItem }: CrudDetailsProps) => {
  return (
    <Box>
      <Text weight="bold">Name</Text>
      <Text>{crudItem.name}</Text>
    </Box>
  );
};
