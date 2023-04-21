import { useSupabaseClient } from '@supabase/auth-helpers-react';

export const useLogin = () => {
  const supabaseClient = useSupabaseClient();

  const handleLogin = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: 'http://localhost:3000/dashboard' },
    });
  };

  return { handleLogin };
};
