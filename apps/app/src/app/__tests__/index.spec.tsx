import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Home } from '../home';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText(/Get started by editing/i);

    expect(heading).toBeInTheDocument();
  });
});
