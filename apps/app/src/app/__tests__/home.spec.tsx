import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from '../../tests/utils/rendering';
import { Home } from '../home';

describe('Home: Component', () => {
  it('renders home button', () => {
    render(<Home />);

    const homeBtn = screen.getByText(/Home/i);

    expect(homeBtn).toBeInTheDocument();
  });
});
