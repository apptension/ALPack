'use client';

import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { IconBrandBitbucket, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/image';

import Logo from '../../../../public/logo-dark.png';
import { useStyles } from './footer.styles';

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();

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
          <Image src={Logo} width={40} alt="Apptension" />
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

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="lg"
            component="a"
            href="https://bitbucket.org/apptension/rnd-app-boilerplate"
            target="_blank"
          >
            <IconBrandBitbucket size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://github.com/apptension" target="_blank">
            <IconBrandGithub size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" component="a" href="https://www.instagram.com/apptension" target="_blank">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
