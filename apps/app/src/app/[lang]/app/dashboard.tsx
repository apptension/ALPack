'use client';

import { Text } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

import { useStyles } from './dashboard.styles';

export function Dashboard() {
  const { classes } = useStyles();
  return (
    <div>
      <Text className={classes.text}>
        <FormattedMessage defaultMessage="This is example dashboard" id="Dashboard / Example / Message" />
      </Text>
    </div>
  );
}
