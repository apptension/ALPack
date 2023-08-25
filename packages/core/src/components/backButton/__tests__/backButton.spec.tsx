import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../../tests/utils/rendering';
import { BackButton } from '../backButton.component';

describe('Example: Component', () => {
  it('should render go back text', () => {
    render(<BackButton />);

    expect(screen.getByText(/Go back/i)).toBeInTheDocument();
  });

  it('should render go back text', async () => {
    const mockedBack = jest.fn();

    render(<BackButton />, {
      routerProps: { router: { back: mockedBack } },
    });

    await userEvent.click(screen.getByText(/Go back/i));

    expect(mockedBack).toHaveBeenCalled();
  });
});
