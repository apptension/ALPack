import { useMutation } from '@apollo/client';
import { graphql } from 'graphql/__generated/gql';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'shared/components/Button';

interface EditProfileFormValues {
  fullName: string;
  avatar: File;
}

const UPDATE_FULL_NAME = graphql(`
  mutation updateProfile($input: profilesUpdateInput!) {
    updateprofilesCollection(set: $input) {
      records {
        full_name
      }
    }
  }
`);

interface EditProfileFormProps {
  fullName?: string;
}

export const EditProfileForm = ({ fullName }: EditProfileFormProps) => {
  const [updateProfile, { loading }] = useMutation(UPDATE_FULL_NAME);
  const { register, handleSubmit } = useForm<EditProfileFormValues>({
    defaultValues: { fullName },
  });

  const handleUpdateProfile: SubmitHandler<EditProfileFormValues> = async (
    formData
  ) => {
    updateProfile({ variables: { input: { full_name: formData.fullName } } });
  };

  return (
    <form
      className="mb-8 flex flex-col gap-4"
      onSubmit={handleSubmit(handleUpdateProfile)}
    >
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
        <input
          type="text"
          {...register('fullName')}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <Button>{loading ? 'Loading...' : 'Update Profile'}</Button>
    </form>
  );
};
