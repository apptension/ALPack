'use client';

import {
  Burger,
  Container,
  Divider,
  Group,
  Header as HeaderBase,
  Paper,
  Transition,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { useState } from 'react';

import LogoDark from '../../../../public/logo-dark.png';
import LogoLight from '../../../../public/logo-light.png';
import { LoginState } from '../loginState';
import { HEADER_HEIGHT, useStyles } from './header.styles';

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function Header({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <HeaderBase height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Image src={colorScheme === 'dark' ? LogoDark : LogoLight} height={45} alt="Apptension" />
        <Group spacing={5} className={classes.links}>
          {items}
          <Divider orientation="vertical" mx={10} />
          <LoginState />
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </HeaderBase>
  );
}
