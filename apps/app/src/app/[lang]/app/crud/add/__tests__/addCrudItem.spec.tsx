import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { append } from 'ramda';
import { Suspense } from 'react';

import { AddCrudItemMutation } from '@ab/api-client';

import { RoutesConfig } from '../../../../../../config/routes';
import { fillAddCRUDItemQuery } from '../../../../../../tests/factories/crudItem';
import { render } from '../../../../../../tests/utils/rendering';
import { AddCrudItem } from '../addCrudItem';

const Component = () => (
  <Suspense fallback="Fallback...">
    <AddCrudItem />
  </Suspense>
);

describe('CRUD: Add item form', () => {
  it('renders CRUD item form', async () => {
    render(<Component />);

    expect(await screen.findByLabelText('Name *')).toBeInTheDocument();
    expect(await screen.findByText('Submit')).toBeInTheDocument();
  });

  describe('action completes successfully', () => {
    it('should call add mutation', async () => {
      const id = 'new-id-999';
      const newItemName = 'new item name';
      const mutationData: AddCrudItemMutation = {
        addCrudItem: {
          id,
          name: newItemName,
        },
      };
      const mutation = fillAddCRUDItemQuery(newItemName, mutationData);
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
