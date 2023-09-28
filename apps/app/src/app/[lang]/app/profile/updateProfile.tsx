'use client';

import { useMutation } from '@apollo/client';
import { notifications } from '@mantine/notifications';

import { UserEntity } from '@ab/graphql-api/entity';

import { ProfileForm, ProfileFormFields } from '../../../../components/profileForm';
import { updateProfileMutation } from './profile.graphql';

export interface UpdateProfileProps {
  initialState: Pick<UserEntity, 'name'>;
}

export const UpdateProfile = ({ initialState }: UpdateProfileProps) => {
  const [commitUpdateProfile, { error, loading: loadingMutation }] = useMutation(updateProfileMutation, {
    onCompleted: () => {
      notifications.show({
        title: 'Success',
        message: 'Changes saved!',
      });
    },
  });

  const onFormSubmit = (formData: ProfileFormFields) => {
    commitUpdateProfile({
      variables: {
        updateProfileData: {
          name: formData.name!,
        },
      },
    });
  };

  return <ProfileForm onSubmit={onFormSubmit} initialData={initialState} loading={loadingMutation} error={error} />;
};
