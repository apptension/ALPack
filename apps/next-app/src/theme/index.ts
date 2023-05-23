import {
  ButtonStylesParams,
  InputStylesParams,
  MantineThemeOverride,
  rem,
} from '@mantine/core';

export const theme: MantineThemeOverride = {
  primaryColor: 'violet',
  fontFamily: 'Nunito, sans-serif',
  defaultRadius: 'md',
  globalStyles: () => ({
    body: {
      margin: 0,
    },
  }),
  focusRingStyles: {
    inputStyles: (theme) => ({
      borderColor: theme.colors.violet[6],
      outline: `${rem(2)} solid ${theme.colors.violet[1]}`,
    }),
  },
  components: {
    Input: {
      styles: (theme, params: InputStylesParams) => ({
        input: {
          backgroundColor: params.invalid
            ? theme.colors.red[0]
            : theme.colors.gray[0],
          ':focus': { backgroundColor: 'transparent' },
        },
      }),
    },
    Button: {
      styles: (theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          fontWeight: 400,
          backgroundColor:
            variant === 'light' && params.color === 'dark'
              ? theme.colors.gray[1]
              : undefined,
          ':hover': {
            backgroundColor:
              variant === 'light' && params.color === 'dark'
                ? theme.colors.gray[3]
                : undefined,
          },
        },
      }),
    },
  },
  headings: {
    fontFamily: 'Nunito, sans-serif',
    sizes: { h1: { fontSize: '2.75rem' } },
  },
};
