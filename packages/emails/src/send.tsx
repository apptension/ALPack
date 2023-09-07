import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import React from 'react';

import { defaultFromEmail, transportConfig } from './config';

const transporter = nodemailer.createTransport(transportConfig);

export const sendEmail = async function <T extends object>(
  Component: React.ComponentType<T>,
  props: T,
  mailOptions: Omit<Mail.Options, 'html'>
) {
  const html = render(<Component {...props} />);

  const from = mailOptions.from ?? defaultFromEmail;

  return await transporter.sendMail({ ...mailOptions, html, from });
};
