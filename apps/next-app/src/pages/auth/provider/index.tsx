import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ROUTES } from 'constants/ROUTES';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Provider = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession();
      router.replace(session ? ROUTES.DASHBOARD : ROUTES.LOGIN);
    };
    getSession();
  }, [router, supabase.auth]);

  return null;
};

export default Provider;
