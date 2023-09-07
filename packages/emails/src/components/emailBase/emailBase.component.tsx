import { Body } from '@react-email/components';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Preview } from '@react-email/preview';
import * as React from 'react';
import { PropsWithChildren } from 'react';

import * as styles from './emailBase.styles';

export interface EmailBaseProps {
  title: string;
  previewText: string;
}

export const EmailBase = ({ children, title, previewText }: PropsWithChildren<EmailBaseProps>) => {
  return (
    <Html>
      <Head>
        <title>{title}</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>{children}</Container>
      </Body>
    </Html>
  );
};
