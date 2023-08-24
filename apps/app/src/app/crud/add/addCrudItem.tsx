'use client';

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { CrudItem } from '@ab/api-client';

import { CrudItemForm, CrudItemFormFields } from '../../../components/crudItemForm/crudItemForm.component';
import { RoutesConfig } from '../../../config/routes';
import { addCRUDItemMutation } from './add.graphql';

export const AddCrudItem = () => {
  const { push } = useRouter();
  const [commitCrudItemFormMutation, { error, loading: loadingMutation }] = useMutation(addCRUDItemMutation, {
    update(cache, { data }) {
      const newItem = data?.addCrudItem;

      cache.modify({
        fields: {
          allCrudItems(existingItems = []) {
            const isAlreadyInConnection = existingItems?.some((item: CrudItem) => item?.id === newItem?.id);
            if (isAlreadyInConnection) {
              return existingItems;
            }
            return [...existingItems, newItem];
          },
        },
      });
    },
    onCompleted: () => {
      push(RoutesConfig.crudList);
    },
  });

  const onFormSubmit = async (formData: CrudItemFormFields) => {
    await commitCrudItemFormMutation({
      variables: {
        newCrudItemData: {
          name: formData.name,
        },
      },
    });
  };

  return <CrudItemForm onSubmit={onFormSubmit} error={error} loading={loadingMutation} />;
};
