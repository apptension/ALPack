'use client';

import { Container, SimpleGrid, Text, Title } from '@mantine/core';
import { IconBrandGraphql, IconBrandReact, IconBrandVercel, IconDatabase, IconUsers } from '@tabler/icons-react';

import { Feature, FeatureProps } from './feature.component';
import { useStyles } from './features.styles';

export const FEATURES_ANCHOR_ID = 'features';

export const MOCKDATA = [
  {
    icon: IconBrandReact,
    title: 'React',
    description:
      'This boilerplate offers enhanced React features like server-side rendering, static site generation, and API routes, optimizing both performance and SEO',
  },
  {
    icon: IconBrandGraphql,
    title: 'GraphQL with Apollo',
    description:
      'Leverage the flexibility of GraphQL and Apollo Client for efficient data-fetching, state management, and seamless API integration.',
  },
  {
    icon: IconDatabase,
    title: 'Postgress + TypeORM',
    description:
      'Equipped with a robust Postgres database and TypeORM, this boilerplate allows for a scalable and type-safe data layer right out of the box.',
  },
  {
    icon: IconUsers,
    title: 'NextAuth authorization',
    description:
      'Secure your application effortlessly with NextAuth, which provides easy-to-implement, robust authentication and authorization.',
  },
  {
    icon: IconBrandVercel,
    title: 'Ready to deploy on Vercel',
    description:
      'Designed for seamless deployment on Vercel, this boilerplate ensures that your application is production-ready in no time.',
  },
];

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function Features({ title, description, data = MOCKDATA }: FeaturesGridProps) {
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
