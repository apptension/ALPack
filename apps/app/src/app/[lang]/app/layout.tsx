'use client';

import { AppShell } from '@mantine/core';
import { ReactNode, useState } from 'react';

import { Header, Navbar } from '@app/components';

export default function AppLayout({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      navbar={<Navbar opened={opened} />}
      navbarOffsetBreakpoint="sm"
      header={<Header opened={opened} toggleOpen={() => setOpened(!opened)} />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white },
      })}
    >
      {children}
    </AppShell>
  );
}
