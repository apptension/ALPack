'use client';

import { Container } from '@mantine/core';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container p="xs">{children}</Container>;
}
