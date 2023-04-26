import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetProfileQuery } from 'graphql/__generated/gql/graphql';
import { GET_PROFILE } from 'shared/queries/index.graphql';
import { GetServerSidePropsContext } from 'next';
import { AvatarChanger } from 'shared/components/profile/AvatarChanger';
import { EditProfileForm } from 'shared/components/profile/EditProfileForm';
import { getApolloServerClient } from 'shared/services/apollo';
import { EDGE_FUNCTION_NAMES } from 'constants/EDGE_FUNCTION_NAMES';
import { TransactionHistory } from 'shared/components/subscriptions/TransactionHistory';

interface ProfileProps {
  profile: GetProfileQuery['profilesCollection'];
  charges: any;
}

const Profile = ({ profile, charges }: ProfileProps) => {
  const userProfile = profile?.edges[0];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-8">Profile</h1>

      <AvatarChanger profileAvatarSrc={userProfile?.node.avatar_url} />
      <EditProfileForm fullName={userProfile?.node.full_name!} />
      <TransactionHistory transactions={charges} />
    </div>
  );
};

export default Profile;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const session = await supabase.auth.getSession();
  const client = getApolloServerClient(session.data.session?.access_token);

  const { data } = await client.query({
    query: GET_PROFILE,
    variables: { profileId: session.data.session?.user.id },
  });

  const { data: chargesData } = await supabase.functions.invoke(
    EDGE_FUNCTION_NAMES.GET_STRIPE_CHARGES
  );
  return { props: { profile: data.profilesCollection, charges: chargesData } };
};
