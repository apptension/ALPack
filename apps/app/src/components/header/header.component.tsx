import { Burger, Header as HeaderBase, MediaQuery, rem, useMantineTheme } from '@mantine/core';
import Image from 'next/image';

import Logo from '../../../public/logo-black.png';

export interface MobileHeaderProps {
  opened: boolean;
  toggleOpen: () => void;
}

export const HEADER_HEIGHT = rem(60);

export function Header({ opened, toggleOpen }: MobileHeaderProps) {
  const theme = useMantineTheme();
  return (
    <HeaderBase height={HEADER_HEIGHT} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
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
      </div>
    </HeaderBase>
  );
}
