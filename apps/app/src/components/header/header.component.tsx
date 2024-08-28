import { AppShell, Burger, Flex, Image as MantineImage, useMantineTheme } from '@mantine/core';
import Image from 'next/image';

import { LanguageSwitch, ThemeToggler } from '@alp/core/components';

import LogoDark from '../../../public/logo-dark.png';
import LogoLight from '../../../public/logo-light.png';

export interface MobileHeaderProps {
  opened: boolean;
  toggleOpen: () => void;
}

export function Header({ opened, toggleOpen }: MobileHeaderProps) {
  const theme = useMantineTheme();
  return (
    <AppShell.Header w="100%" p="md">
      <Flex align="center" h="100%" w="100%" justify="space-between">
        <>
          <Burger
            hiddenFrom="sm"
            opened={opened}
            onClick={toggleOpen}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
            data-testid="toggle-button"
          />
          <MantineImage component={Image} src={LogoLight} alt="Apptension" height={28} darkHidden />
          <MantineImage component={Image} src={LogoDark} alt="Apptension" height={28} lightHidden />
        </>
        <Flex align="center" h="100%" gap="md">
          <ThemeToggler />
          <LanguageSwitch />
        </Flex>
      </Flex>
    </AppShell.Header>
  );
}
