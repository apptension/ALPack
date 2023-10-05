'use client';

import { Button, ButtonProps } from '@mantine/core';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import { PropsWithChildren, forwardRef } from 'react';

export type InternalLinkProps = NextLinkProps;

export type LinkProps = PropsWithChildren<ButtonProps & InternalLinkProps>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <Button component={NextLink} {...props} ref={ref} />;
});
