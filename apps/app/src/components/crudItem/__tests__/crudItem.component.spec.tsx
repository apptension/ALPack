import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from '../../../tests/utils/rendering';
import { CrudItem } from '../crudItem.component';

describe('CrudItem: Component', () => {
  it('renders Sign Out', () => {
    const crudItem = {
      id: '1',
      name: 'test-name',
    };
    render(<CrudItem crudItem={crudItem} />, {
      routerProps: {
        router: {
          push: jest.fn(),
        },
      },
    });

    expect(screen.getByText(crudItem.name)).toBeInTheDocument();
  });
});
