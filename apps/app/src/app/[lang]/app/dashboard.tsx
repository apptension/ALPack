'use client';

import { Text } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

import classes from './dashboard.module.css';

export function Dashboard() {
  return (
    <div>
      <Text className={classes.text}>
        <FormattedMessage defaultMessage="This is example dashboard" id="Dashboard / Example / Message" />
      </Text>
    </div>
  );
}
