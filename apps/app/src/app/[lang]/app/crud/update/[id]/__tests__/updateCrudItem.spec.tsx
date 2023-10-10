import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { append } from 'ramda';
import { Suspense } from 'react';

import { CrudItem, UpdateCrudItemMutation } from '@alp/api-client';

import { RoutesConfig } from '../../../../../../../config/routes';
import { fillUpdateCRUDItemQuery } from '../../../../../../../tests/factories/crudItem';
import { render } from '../../../../../../../tests/utils/rendering';
import { UpdateCrudItem, UpdateCrudItemProps } from '../updateCrudItem';

describe('CRUD: Update item form', () => {
  const crudItem: CrudItem = {
    id: 'test-id-999',
    name: 'test-name',
  };
  const defaultProps: UpdateCrudItemProps = {
    crudItem,
  };

  const Component = (props: Partial<UpdateCrudItemProps> = {}) => (
    <Suspense fallback="Fallback...">
      <UpdateCrudItem {...defaultProps} {...props} />
    </Suspense>
  );
  it('renders CRUD item form', async () => {
    render(<Component />);

    expect(await screen.findByDisplayValue(crudItem.name)).toBeInTheDocument();
    expect(await screen.findByText('Submit')).toBeInTheDocument();
  });

  describe('action completes successfully', () => {
    it('should call update mutation', async () => {
      const newItemName = 'new item name';
      const mutationData: UpdateCrudItemMutation = {
        updateCrudItem: {
          id: crudItem.id,
          name: newItemName,
        },
      };
      const mutation = fillUpdateCRUDItemQuery(crudItem.id, newItemName, mutationData);
      mutation.newData = jest.fn(() => ({
        data: mutationData,
      }));
      const push = jest.fn();
      render(<Component />, {
        apolloMocks: append(mutation),
        routerProps: {
          router: {
            push,
          },
        },
      });

      const nameField = await screen.findByPlaceholderText(/name/i);
      await userEvent.clear(nameField);
      await userEvent.type(nameField, newItemName);
      await userEvent.click(screen.getByRole('button', { name: /submit/i }));

      expect(mutation.newData).toHaveBeenCalled();
      expect(push).toHaveBeenCalledWith(RoutesConfig.crudList);
    });
  });
});
