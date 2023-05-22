import { ROUTES } from 'constants/ROUTES';

export const getRedirectURL = () => {
  let baseUrl =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000';

  baseUrl = baseUrl.includes('http') ? baseUrl : `https://${baseUrl}`;
  baseUrl =
    baseUrl.charAt(baseUrl.length - 1) === '/'
      ? baseUrl.slice(0, baseUrl.length - 1)
      : baseUrl;

  const url = `${baseUrl}${ROUTES.PROVIDER}`;
  return url;
};
