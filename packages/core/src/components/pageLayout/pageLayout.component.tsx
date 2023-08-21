'use client';

import { Container } from '@mantine/core';
import { ReactNode } from 'react';

export interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <Container>{children}</Container>;
};
