'use client';

import { Flex, SimpleGrid, Skeleton, Space } from '@mantine/core';

import { PageLayout } from '@ab/core/components';

export default function Loading() {
  return (
    <PageLayout>
      <Flex direction="column">
        <Skeleton height={40} width={120} />
        <Space h="xs" />
        <Skeleton height={40} width={200} />
        <Space h="xs" />
        <Skeleton height={1} />
        <Space h="xs" />
      </Flex>
      <SimpleGrid cols={4} spacing="sm" verticalSpacing="xs">
        <Skeleton height={96} />
        <Skeleton height={96} />
        <Skeleton height={96} />
        <Skeleton height={96} />
      </SimpleGrid>
    </PageLayout>
  );
}
