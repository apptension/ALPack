'use client';

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { CrudItem } from '@ab/api-client';

import { CrudItemForm, CrudItemFormFields } from '@app/components/crudItemForm/crudItemForm.component';
import { RoutesConfig } from '@app/config/routes';
import { updateCRUDItemMutation } from '@app/graphql';

export interface UpdateCrudItemProps {
  crudItem: CrudItem;
}

export const UpdateCrudItem = ({ crudItem }: UpdateCrudItemProps) => {
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
          id: crudItem.id,
          name: formData.name,
        },
      },
    });
  };

  return <CrudItemForm onSubmit={onFormSubmit} initialData={crudItem} loading={loadingMutation} error={error} />;
};
