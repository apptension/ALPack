import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  text: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
