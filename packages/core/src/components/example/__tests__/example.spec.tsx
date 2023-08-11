import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from '../../../tests/utils/rendering';
import { Example } from '../example.component';

describe('Example: Component', () => {
  it('renders text', () => {
    render(<Example />);

    expect(screen.getByText(/Example/i)).toBeInTheDocument();
  });
});
