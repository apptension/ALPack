import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ROUTES } from 'constants/ROUTES';
import { useRouter } from 'next/router';

export const useDashboard = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push(ROUTES.LOGIN);
  };

  return { handleLogout };
};
