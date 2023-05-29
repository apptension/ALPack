import { GetProfileQuery } from 'graphql/__generated/gql/graphql';
import { EditProfileForm } from 'shared/components/profile/EditProfileForm';

interface ProfileProps {
  profile: GetProfileQuery['profilesCollection'];
  charges: any;
}

const Profile = ({ profile, charges }: ProfileProps) => {
  const userProfile = profile?.edges[0];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-8">Profile</h1>

      <EditProfileForm fullName={userProfile?.node.full_name!} />
    </div>
  );
};

export default Profile;
