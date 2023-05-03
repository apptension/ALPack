const PUBLIC_BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL ?? '/api';
export const apiURL = (value: string) => PUBLIC_BASE_API_URL + value;
