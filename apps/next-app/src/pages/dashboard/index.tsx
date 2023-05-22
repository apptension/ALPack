import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { ROUTES } from 'constants/ROUTES';
import { GetProfileQuery } from 'graphql/__generated/gql/graphql';
import { GET_PROFILE } from 'shared/queries/index.graphql';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar } from 'shared/components/Avatar';
import { Button } from 'shared/components/Button';
import { getApolloServerClient } from 'shared/services/apollo';

interface DashboardProps {
  profile: GetProfileQuery['profilesCollection'];
}

const Dasboard = ({ profile }: DashboardProps) => {
  const userProfile = profile?.edges[0];
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push(ROUTES.LOGIN);
  };

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        {userProfile?.node.avatar_url && (
          <div className="mb-12">
            <Avatar src={userProfile.node.avatar_url} width={56} height={56} />
          </div>
        )}
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
    </div>
  );
};

export default Dasboard;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const session = await supabase.auth.getSession();
  const client = getApolloServerClient(session.data.session?.access_token);

  const { data } = await client.query({
    query: GET_PROFILE,
    variables: { profileId: session.data.session?.user.id },
  });
  return { props: { profile: data.profilesCollection } };
};
