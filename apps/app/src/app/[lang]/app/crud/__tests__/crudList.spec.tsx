import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { append, times } from 'ramda';
import { Suspense } from 'react';

import { UserRole } from '@ab/graphql-api/types';

import { crudItemFactory, fillCRUDListQuery } from '../../../../../tests/factories/crudItem';
import { sessionProviderFactory } from '../../../../../tests/factories/sessionProviderFactory';
import { render } from '../../../../../tests/utils/rendering';
import { CrudList } from '../crudList';

describe('CRUD: List component', () => {
  it('renders CRUD items list', async () => {
    const items = times(() => crudItemFactory(), 3);
    const mockRequest = fillCRUDListQuery(items);

    render(
      <Suspense fallback="Fallback...">
        <CrudList />
      </Suspense>,
      {
        apolloMocks: append(mockRequest),
      }
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(await screen.findByText(items[0].name!)).toBeInTheDocument();
  });

  describe('when not admin', () => {
    it('renders message with admin role needed', async () => {
      const items = times(() => crudItemFactory(), 3);
      const mockRequest = fillCRUDListQuery(items);

      render(
        <Suspense fallback="Fallback...">
          <CrudList />
        </Suspense>,
        {
          apolloMocks: append(mockRequest),
          sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
        }
      );

      expect(await screen.findByText('You need to have an admin role to add item')).toBeInTheDocument();
    });
  });

  describe('when admin', () => {
    it("shouldn't render message with admin role needed", async () => {
      const items = times(() => crudItemFactory(), 3);
      const mockRequest = fillCRUDListQuery(items);

      const { waitForApolloMocks } = render(
        <Suspense fallback="Fallback...">
          <CrudList />
        </Suspense>,
        {
          apolloMocks: append(mockRequest),
          sessionProviderProps: sessionProviderFactory({ role: UserRole.ADMIN }),
        }
      );

      await waitForApolloMocks();

      expect(screen.queryByText('You need to have an admin role to add item')).not.toBeInTheDocument();
    });
  });
});
