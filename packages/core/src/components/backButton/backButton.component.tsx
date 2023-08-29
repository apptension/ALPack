'use client';

import { Button } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

export type BackButtonProps = {
  children?: ReactNode;
};

export const BackButton = ({ children }: BackButtonProps) => {
  const { back } = useRouter();

  const handleBackClick = () => {
    back();
  };

  return (
    <Button onClick={handleBackClick} leftIcon={<IconChevronLeft />}>
      {children ?? <FormattedMessage defaultMessage="Go back" id="BackButton / Label" />}
    </Button>
  );
};
