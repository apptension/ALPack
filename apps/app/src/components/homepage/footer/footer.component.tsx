'use client';

import { ActionIcon, Container, Group, Text, useMantineColorScheme } from '@mantine/core';
import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';
import Image from 'next/image';

import LogoDark from '../../../../public/logo-dark.png';
import LogoLight from '../../../../public/logo-light.png';
import classes from './footer.module.css';

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function Footer({ data }: FooterLinksProps) {
  const { colorScheme } = useMantineColorScheme();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'> key={index} className={classes.link} component="a" target="_blank" href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={colorScheme === 'dark' ? LogoDark : LogoLight} width={40} alt="Apptension" />
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} apptension.com. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="subtle"
            component="a"
            href="https://github.com/apptension/alpack"
            target="_blank"
          >
            <IconBrandGithub size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="subtle" component="a" href="https://discord.apptension.com" target="_blank">
            <IconBrandDiscord size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="subtle" component="a" href="https://twitter.com/apptension" target="_blank">
            <IconBrandX size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="subtle"
            component="a"
            href="https://www.instagram.com/apptension"
            target="_blank"
          >
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
