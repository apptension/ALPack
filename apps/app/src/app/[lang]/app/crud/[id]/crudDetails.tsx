'use client';

import { Box, Text } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

import { CrudItem as CrudItemType } from '@alp/api-client';

export interface CrudDetailsProps {
  crudItem: CrudItemType;
}
export const CrudDetails = ({ crudItem }: CrudDetailsProps) => {
  return (
    <Box>
      <Text weight="bold">
        <FormattedMessage defaultMessage="Name" id="CrudDetails / Label / Name" />
      </Text>
      <Text>{crudItem.name}</Text>
    </Box>
  );
};
