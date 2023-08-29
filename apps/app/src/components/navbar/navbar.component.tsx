'use client';

import { Navbar as NavbarBase, ScrollArea } from '@mantine/core';
import { IconDashboard, IconLogout, IconStar, IconUser } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FormattedMessage } from 'react-intl';

import { useStyles } from './navbar.styles';

const data = [
  { link: '/app', label: 'Dashboard', icon: IconDashboard },
  { link: '/app/crud', label: 'CRUD Example', icon: IconStar },
];

export interface NavbarProps {
  opened: boolean;
  toggleOpen?: () => void;
}

export function Navbar({ opened }: NavbarProps) {
  const { classes, cx } = useStyles();
  const pathname = usePathname();

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: pathname === item.link })}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <NavbarBase width={{ sm: 300 }} p="md" hiddenBreakpoint="sm" hidden={!opened}>
      <NavbarBase.Section grow component={ScrollArea}>
        {links}
      </NavbarBase.Section>

      <NavbarBase.Section className={classes.footer}>
        <a href="/app/profile" className={classes.link}>
          <IconUser className={classes.linkIcon} stroke={1.5} />
          <span>
            <FormattedMessage defaultMessage="Your Profile" id="Navbar / Profile" />
          </span>
        </a>

        <a href="#" className={classes.link} onClick={() => signOut()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>
            <FormattedMessage defaultMessage="Logout" id="Navbar / Logout" />
          </span>
        </a>
      </NavbarBase.Section>
    </NavbarBase>
  );
}
