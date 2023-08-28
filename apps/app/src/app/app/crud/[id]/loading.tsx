'use client';

import { Flex, Skeleton, Space } from '@mantine/core';

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
        <Skeleton height={40} width={100} />
      </Flex>
    </PageLayout>
  );
}
