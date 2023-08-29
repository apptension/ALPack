'use client';

import { Container, SimpleGrid, Text, Title } from '@mantine/core';

import { Feature, FeatureProps } from './feature.component';
import { useStyles } from './features.styles';

export const FEATURES_ANCHOR_ID = 'features';

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data: FeatureProps[];
}

export function Features({ title, description, data }: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper} id={FEATURES_ANCHOR_ID}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
