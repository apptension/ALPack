'use client';

import { Button, ButtonProps } from '@mantine/core';
import { LinkProps as NextLinkProps } from 'next/link';
import { default as NextLink } from 'next/link';
import { FC, ReactNode } from 'react';

export type InternalLinkProps = NextLinkProps;

export type LinkProps = {
  buttonProps?: ButtonProps;
  linkProps: InternalLinkProps;
} & { children?: ReactNode };

export const Link: FC<LinkProps> = (props) => {
  const { buttonProps, linkProps, children } = props;

  return (
    <NextLink {...linkProps}>
      <Button {...buttonProps}>{children}</Button>
    </NextLink>
  );
};
