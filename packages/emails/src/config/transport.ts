import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const transportConfig: SMTPTransport.Options = {
  host: process.env['SMTP_HOST'] ?? 'localhost',
  port: parseInt(process.env['SMTP_PORT'] || '', 10) || 587,
  secure: !!process.env['SMTP_SECURE'] ?? false,
  auth: {
    user: process.env['SMTP_USERNAME'] ?? '',
    pass: process.env['SMTP_PASSWORD'] ?? '',
  },
};

export const defaultFromEmail = process.env['DEFAULT_FROM_EMAIL'] ?? '';
