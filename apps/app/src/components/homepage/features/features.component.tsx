'use client';

import { Container, SimpleGrid, Text, Title } from '@mantine/core';

import { Feature, FeatureProps } from './feature.component';
import classes from './features.module.css';

export const FEATURES_ANCHOR_ID = 'features';

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data: FeatureProps[];
}

export function Features({ title, description, data }: FeaturesGridProps) {
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper} id={FEATURES_ANCHOR_ID}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="m" c="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid mt={60} spacing={50} cols={{ base: 1, sm: 3 }}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
