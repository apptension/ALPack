'use client';

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { allCrudItemsQuery } from '../crud.graphql';
import { addCRUDItemMutation } from './add.graphql';

import { CrudItemForm, CrudItemFormFields } from '@app/components/crudItemForm/crudItemForm.component';
import { RoutesConfig } from '@app/config/routes';



export const AddCrudItem = () => {
  const { push } = useRouter();
  const [commitCrudItemFormMutation, { error, loading: loadingMutation }] = useMutation(addCRUDItemMutation, {
    refetchQueries: () => [
      {
        query: allCrudItemsQuery,
      },
    ],
    onCompleted: () => {
      push(RoutesConfig.crudList);
    },
  });

  const onFormSubmit = (formData: CrudItemFormFields) => {
    commitCrudItemFormMutation({
      variables: {
        newCrudItemData: {
          name: formData.name,
        },
      },
    });
  };

  return <CrudItemForm onSubmit={onFormSubmit} error={error} loading={loadingMutation} />;
};
