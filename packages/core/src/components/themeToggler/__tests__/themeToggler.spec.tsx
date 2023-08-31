import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeToggler } from '../';
import { render } from '../../../tests/utils/rendering';

describe('ThemeToggler: Component', () => {
  it('should renders default theme', () => {
    render(<ThemeToggler />);

    expect(screen.getByTestId('light')).toBeInTheDocument();
  });

  it('should toggle theme', async () => {
    render(<ThemeToggler />);

    const toggler = screen.getByTitle('Toggle color scheme');

    await userEvent.click(toggler);

    expect(screen.getByTestId('dark')).toBeInTheDocument();
  });
});
