'use client';

import { Box, Divider, Title } from '@mantine/core';
import { ReactNode } from 'react';

import { BackButton } from '../backButton';

export type PageHeadlineProps = {
  hasBackButton?: boolean;
  header: ReactNode;
  subheader?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageHeadline = ({ hasBackButton, header, subheader }: PageHeadlineProps) => {
  return (
    <>
      <Box>
        {hasBackButton ? <BackButton /> : null}
        <Title order={1}>{header}</Title>
        {subheader && <Title order={5}>{subheader}</Title>}
      </Box>
      <Divider mb="md" />
    </>
  );
};
