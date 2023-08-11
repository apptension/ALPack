import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from '../../tests/utils/rendering';
import { Home } from '../home';

describe('Home: Component', () => {
  it('renders sample button', () => {
    render(<Home />);

    const heading = screen.getByText(/Sample button/i);

    expect(heading).toBeInTheDocument();
  });
});
