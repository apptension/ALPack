import { Hr, Img, Link, Text } from '@react-email/components';
import { Heading } from '@react-email/heading';
import * as React from 'react';

import { EmailBase } from '../components/emailBase';
import { baseUrl } from '../utils';
import * as styles from './welcome.styles';

export interface WelcomeEmailProps {
  name: string;
}

export function WelcomeEmail({ name = 'Name' }: WelcomeEmailProps) {
  return (
    <EmailBase title="Welcome onboard!" previewText="Welcome email preview">
      <>
        <Heading as="h2">Welcome {name}!</Heading>

        <Text style={{ ...styles.text, marginBottom: '14px' }}>
          This platform is designed to simplify your development experience — we're thrilled to have you on board!
        </Text>

        <Hr style={styles.hr} />

        <Img src={`${baseUrl}/logo.png`} width="50" height="47" alt="Apptension's Logo" />

        <Text style={styles.footer}>
          <Link href="https://apptension.com" target="_blank" style={styles.link}>
            apptension.com
          </Link>
          <br />
          We design,
          <br />
          build and launch
          <br />
          digital products
        </Text>
      </>
    </EmailBase>
  );
}

export default WelcomeEmail;
