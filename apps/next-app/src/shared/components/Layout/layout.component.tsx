import {
  AppShell,
  Avatar,
  ColorSchemeProvider,
  Flex,
  Header,
  MediaQuery,
  Navbar,
  Switch,
  Text,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';
import { ReactNode } from 'react';
import Logo from 'assets/logo.svg';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { ROUTES } from 'constants/ROUTES';

interface LayoutProps {
  children: ReactNode;
}

const useStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  header: {
    background:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },
  logoLink: {
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
    fontWeight: 700,
  },
  menuItem: {
    color:
      theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xs,
    fontWeight: 700,
    ':hover': {
      color:
        theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.violet,
      background:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[8]
          : theme.colors.violet[0],
    },
  },
  main: {
    background:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },
  navbar: {
    background:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.white,
    borderTopLeftRadius: theme.radius.lg,
    borderTopRightRadius: theme.radius.md,
  },
}));

export const Layout = ({ children }: LayoutProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const userName = 'John Doe';

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <AppShell
          className={classes.main}
          header={
            <Header
              height="70px"
              withBorder={false}
              px="xl"
              className={classes.header}
            >
              <Flex justify="flex-end" h="100%" align="center">
                <Switch
                  onClick={() => toggleColorScheme()}
                  label={colorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
                />
              </Flex>
            </Header>
          }
          navbar={
            <Navbar
              width={{ base: 220, md: 260 }}
              h="100%"
              pt="md"
              pb="xl"
              px="lg"
              top={6}
              left={6}
              className={classes.navbar}
            >
              <Navbar.Section mb="2xl">
                <Link href={ROUTES.HOME} className={classes.logoLink}>
                  <Flex align="center" gap="md">
                    <Logo />
                    React Boilerplate
                  </Flex>
                </Link>
              </Navbar.Section>
              <Navbar.Section grow>
                <Flex direction="column" gap="xs">
                  <Link href={ROUTES.SUBSCRIPTION} className={classes.menuItem}>
                    Subscriptions
                  </Link>
                  <Link href={ROUTES.PROFILE} className={classes.menuItem}>
                    Profile
                  </Link>
                  <Link href={ROUTES.ANALYTICS} className={classes.menuItem}>
                    Analytics
                  </Link>
                </Flex>
              </Navbar.Section>
              <Navbar.Section>
                <Flex align="center" gap="md">
                  <Avatar size="lg" radius="xl" color="violet">
                    MM
                  </Avatar>
                  <Text size="lg">{userName}</Text>
                </Flex>
              </Navbar.Section>
            </Navbar>
          }
        >
          {children}
        </AppShell>
      </ColorSchemeProvider>
    </>
  );
};
