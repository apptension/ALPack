'use client';

import { ApolloQueryResult, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { CrudItem } from '@ab/api-client';
import { updateCRUDItemMutation } from './updateCrudItem.graphql';
import { CrudItemForm, CrudItemFormFields } from '@app/components/crudItemForm/crudItemForm.component';
import { RoutesConfig } from '@app/config/routes';


export interface EditCrudItemProps {
  result: ApolloQueryResult<{
    crudItem: CrudItem;
  }>;
}

export const EditCrudItem = ({ result }: EditCrudItemProps) => {
  const { data } = result;
  const { push } = useRouter();

  const [commitUpdateCrudItem, { error, loading: loadingMutation }] = useMutation(updateCRUDItemMutation, {
    onCompleted: () => {
      push(RoutesConfig.crudList);
    },
  });

  const onFormSubmit = (formData: CrudItemFormFields) => {
    commitUpdateCrudItem({
      variables: {
        updateCrudItemData: {
          id: data.crudItem.id,
          name: formData.name,
        },
      },
    });
  };

  return <CrudItemForm onSubmit={onFormSubmit} initialData={data.crudItem} loading={loadingMutation} error={error} />;
};
