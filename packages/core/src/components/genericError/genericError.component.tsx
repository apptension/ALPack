'use client';

import { Container, Group, Text, Title } from '@mantine/core';
import { FormattedMessage } from 'react-intl';

import { Link } from '../link';
import classes from './genericError.module.css';

export function GenericError() {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <FormattedMessage defaultMessage="Something went wrong" id="GenericError / Title" />
          </Title>
          <Text color="dimmed" size="lg" ta="center" className={classes.description}>
            <FormattedMessage
              defaultMessage="On the page you are trying to open occured error"
              id="GenericError / Description"
            />
          </Text>
          <Group justify="center">
            <Link href="/" size="md">
              <FormattedMessage defaultMessage="Take me back to home page" id="GenericError / Back Button" />
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
}
