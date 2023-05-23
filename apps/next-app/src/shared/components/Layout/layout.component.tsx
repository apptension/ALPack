import {
  ActionIcon,
  Burger,
  Button,
  ColorScheme,
  ColorSchemeProvider,
  Drawer,
  Flex,
  Header,
  Text,
  createStyles,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { ReactNode, useState } from 'react';
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
    zIndex: 9999,
    margin: 0,
    position: 'relative',
  },
}));

export const Layout = ({ children }: LayoutProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  const label = opened ? 'Close navigation' : 'Open navigation';
  console.log(colorScheme);

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <Header
          className={classes.header}
          height={75}
          p="sm"
          withBorder={opened ? true : false}
        >
          <Flex align="center" gap="md" justify="space-between">
            <Flex align="center">
              <Logo />
              React Boilerplate
            </Flex>
            <Flex>
              <Button
                variant="outline"
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {colorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
              </Button>
              <Burger
                className={classes.burger}
                opened={opened}
                onClick={toggle}
                aria-label={label}
              />
            </Flex>
          </Flex>

          <Drawer
            opened={opened}
            onClose={close}
            position="right"
            padding="xl"
            styles={{ body: { paddingTop: rem(100) } }}
            withCloseButton={false}
          >
            <Text
              size="xl"
              component={Link}
              href={ROUTES.LOGIN}
              onClick={close}
            >
              Sign In
            </Text>
          </Drawer>
        </Header>
        {children}
      </ColorSchemeProvider>
    </>
  );
};
