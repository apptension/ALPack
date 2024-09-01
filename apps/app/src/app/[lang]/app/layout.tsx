'use client';

import { AppShell, rem } from '@mantine/core';
import { ReactNode, useState } from 'react';

import { Header, Navbar } from '@app/components';

const HEADER_HEIGHT = rem(60);

export default function AppLayout({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      header={{
        height: HEADER_HEIGHT,
      }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <Header opened={opened} toggleOpen={() => setOpened(!opened)} />
      <Navbar opened={opened} />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
