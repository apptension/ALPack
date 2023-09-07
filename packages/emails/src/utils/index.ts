export const baseUrl = process.env['VERCEL_URL']
  ? `https://${process.env['VERCEL_URL']}/emails`
  : 'http://localhost:3000/emails';
