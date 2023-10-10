'use client';

import { Container, Text, Title } from '@mantine/core';

import { Dots } from './dots.component';
import { useStyles } from './hero.styles';

export function Hero() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          ALPack - NextJS App Boilerplate by{' '}
          <Text component="span" className={classes.highlight} inherit>
            Apptension
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build full stack apps with React, NodeJS and Vercel.
          </Text>
        </Container>
      </div>
    </Container>
  );
}
