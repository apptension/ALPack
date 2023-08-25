'use client';

import { Button, ButtonProps } from '@mantine/core';
import { LinkProps as NextLinkProps } from 'next/link';
import { default as NextLink } from 'next/link';
import { FC, PropsWithChildren } from 'react';

export type InternalLinkProps = NextLinkProps;

export type LinkProps = PropsWithChildren<ButtonProps & InternalLinkProps>;

export const Link: FC<LinkProps> = (props) => {
  return <Button component={NextLink} {...props} />;
};
