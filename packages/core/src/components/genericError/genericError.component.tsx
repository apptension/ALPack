'use client';

import { Container, Group, Text, Title } from '@mantine/core';

import { Link } from '../link';
import { useStyles } from './genericError.styles';

export function GenericError() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Something went wrong</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            On the page you are trying to open occured error
          </Text>
          <Group position="center">
            <Link href="/" size="md">
              Take me back to home page
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
}
