import { Burger, Flex, Header as HeaderBase, MediaQuery, rem, useMantineTheme } from '@mantine/core';
import Image from 'next/image';

import { LanguageSwitch } from '@ab/core/components';
import { ThemeToggler } from '@ab/core/components';

import Logo from '../../../public/logo-black.png';

export interface MobileHeaderProps {
  opened: boolean;
  toggleOpen: () => void;
}

export const HEADER_HEIGHT = rem(60);

export function Header({ opened, toggleOpen }: MobileHeaderProps) {
  const theme = useMantineTheme();
  return (
    <HeaderBase w="100%" height={HEADER_HEIGHT} p="md">
      <Flex align="center" h="100%" w="100%" justify="space-between">
        <>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={toggleOpen}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
              data-testid="toggle-button"
            />
          </MediaQuery>
          <Image src={Logo} alt="Apptension" height={28} />
        </>
        <Flex align="center" h="100%" gap="md">
          <ThemeToggler />
          <LanguageSwitch />
        </Flex>
      </Flex>
    </HeaderBase>
  );
}
