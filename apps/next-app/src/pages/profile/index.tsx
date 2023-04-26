import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetProfileQuery } from 'graphql/__generated/gql/graphql';
import { GET_PROFILE } from 'shared/queries/index.graphql';
import { GetServerSidePropsContext } from 'next';
import { AvatarChanger } from 'shared/components/profile/AvatarChanger';
import { EditProfileForm } from 'shared/components/profile/EditProfileForm';
import { getApolloServerClient } from 'shared/services/apollo';
import { EDGE_FUNCTION_NAMES } from 'constants/EDGE_FUNCTION_NAMES';
import { Checkmark } from 'shared/components/Checkmark';
import { Crossmark } from 'shared/components/Crossmark';
import { getSubscriptionPrice } from 'utils/getSubscriptionPrice';
import { format, fromUnixTime } from 'date-fns';

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
      <div className="max-w-xl w-full">
        <h2 className="mt-8 text-2xl">Transaction history</h2>
        <div className="flex flex-col">
          {charges.charges.data.map(
            ({ id, created, description, amount, currency, status }: any) => (
              <div
                key={id}
                className="flex justify-between w-full border-b-2 border-slate-800 py-6"
              >
                <div>
                  {description}{' '}
                  <span className="text-slate-400">
                    ({format(fromUnixTime(created), 'Pp')})
                  </span>
                </div>
                <div>
                  {getSubscriptionPrice(amount)} {currency.toUpperCase()}
                </div>
                {status === 'succeeded' ? <Checkmark /> : <Crossmark isError />}
              </div>
            )
          )}
        </div>
      </div>
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
