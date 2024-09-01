import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

import classes from './themeToggler.module.css';

export const ThemeToggler = () => {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="outline"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      className={classes.root}
    >
      <IconMoonStars className={classes.iconLight} data-testid="light" size="1.1rem" />
      <IconSun className={classes.iconDark} data-testid="dark" size="1.1rem" />
    </ActionIcon>
  );
};
