import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { graphql } from 'graphql/__generated/gql';
import { GetProfileQuery } from 'graphql/__generated/gql/graphql';
import { GetServerSidePropsContext } from 'next';
import { AvatarChanger } from 'shared/components/profile/AvatarChanger';
import { EditProfileForm } from 'shared/components/profile/EditProfileForm';
import { getApolloServerClient } from 'shared/services/apollo';

const GET_PROFILE = graphql(`
  query getProfile {
    profilesCollection {
      edges {
        node {
          id
          full_name
          avatar_url
        }
      }
    }
  }
`);

interface ProfileProps {
  profile: GetProfileQuery['profilesCollection'];
}

const Profile = ({ profile }: ProfileProps) => {
  const userProfile = profile?.edges[0];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-8">Profile</h1>

      <AvatarChanger profileAvatarSrc={userProfile?.node.avatar_url} />
      <EditProfileForm fullName={userProfile?.node.full_name!} />
    </div>
  );
};

export default Profile;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const session = await supabase.auth.getSession();
  const client = getApolloServerClient(session.data.session?.access_token);

  const { data } = await client.query({ query: GET_PROFILE });
  return { props: { profile: data.profilesCollection } };
};
