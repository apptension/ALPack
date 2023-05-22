import { useMutation } from '@apollo/client';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';

import { ValidationError } from '@vm/api-client/__generated/gql/graphql';

import { newProjectMutation } from '@app/graphql/projects.graphql';

type NewProjectFormData = {
  name: string;
};

export const NewProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewProjectFormData>();

  const [createProject, { loading, error }] = useMutation(newProjectMutation);

  const onSubmit = async (formData: NewProjectFormData) => {
    try {
      const response = await createProject({
        variables: {
          name: formData.name,
        },
      });

      const responseData = response.data?.createProject;

      if (response.data) {
        console.log(response.data);
        // handle success
        reset();
      } else {
        const { message, fieldErrors } = responseData as ValidationError;
        // handle validation error
        console.error(message, fieldErrors);
      }
    } catch (error) {
      // handle other errors
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center mb-4">
      <input
        type="text"
        {...register('name', { required: true })}
        className="flex-grow p-2 mr-2 border border-gray-400 rounded-md bg-white text-gray-800 dark:bg-gray-800 dark:text-white"
        placeholder="Enter project name"
      />
      <button
        type="submit"
        className={`flex items-center px-4 py-2 rounded-md ${
          loading ? 'bg-gray-400 cursor-wait' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        disabled={loading}
      >
        <PlusIcon className="w-5 h-5 mr-2" />
        Add Project
      </button>
      {errors.name && (
        <p className="ml-2 text-red-500">
          {errors.name.type === 'required' ? 'Project name is required' : errors.name.message}
        </p>
      )}
      {error && (
        <p className="ml-2 text-red-500">
          {error.message.includes('validation') ? error.message : 'Something went wrong'}
        </p>
      )}
    </form>
  );
};
