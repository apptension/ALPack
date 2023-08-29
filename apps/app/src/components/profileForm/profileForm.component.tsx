'use client';

import { ApolloError } from '@apollo/client';
import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export type ProfileFormFields = {
  name: string | null;
};
export type ProfileFormProps = {
  onSubmit: (formData: ProfileFormFields) => void;
  loading: boolean;
  initialData?: ProfileFormFields | null;
  error?: ApolloError;
};

export const ProfileForm = ({ loading, onSubmit, initialData }: ProfileFormProps) => {
  const initialForm = initialData ? initialData : { name: '' };
  const form = useForm({
    initialValues: initialForm,
    validate: {
      name: (value) => value && (/^[\s\w.]{1,255}$/.test(value) ? null : 'Invalid name'),
    },
  });

  return (
    <Box maw={300}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput withAsterisk label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <Group position="right" mt="md">
          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};
