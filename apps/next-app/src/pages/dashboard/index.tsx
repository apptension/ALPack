import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ROUTES } from 'constants/ROUTES';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'shared/components/Button';

const Dasboard = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push(ROUTES.LOGIN);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-8">Dashboard</h1>
      <div className="flex gap-6 items-center">
        <Link
          href={ROUTES.PROFILE}
          className="w-36 border-solid border-2 border-indigo-500 rounded-md py-3 px-3 text-center"
        >
          Go to Profile
        </Link>
        <Button className="w-36" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Dasboard;
