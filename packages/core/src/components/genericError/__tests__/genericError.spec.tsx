import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from '../../../tests/utils/rendering';
import { GenericError } from '../genericError.component';

describe('GenericError: Component', () => {
  it('renders GenericError content', () => {
    render(<GenericError />);
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/On the page you are trying to open occured error/i)).toBeInTheDocument();
  });
});
