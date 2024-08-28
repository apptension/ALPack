'use client';

import { ApolloError } from '@apollo/client';
import { Box, Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormattedMessage } from 'react-intl';

export type CrudItemFormFields = {
  name: string;
};
export type CrudItemFormProps = {
  onSubmit: (formData: CrudItemFormFields) => void;
  loading: boolean;
  initialData?: CrudItemFormFields | null;
  error?: ApolloError;
};

export const CrudItemForm = ({ loading, onSubmit, initialData }: CrudItemFormProps) => {
  const initialForm = initialData || { name: '' };
  const form = useForm({
    initialValues: initialForm,
    validate: {
      name: (value) => (/^[\s\w.]{1,255}$/.test(value) ? null : 'Invalid name'),
    },
  });

  return (
    <Box maw={300}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput withAsterisk label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <Group justify="flex-end" mt="md">
          <Button loading={loading} type="submit">
            <FormattedMessage defaultMessage="Submit" id="CrudItemForm / Submit Button" />
          </Button>
        </Group>
      </form>
    </Box>
  );
};
