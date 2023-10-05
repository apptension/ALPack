import { useSession } from 'next-auth/react';

export const useUserRole = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return null;
  }

  return session?.user?.role ?? null;
};
