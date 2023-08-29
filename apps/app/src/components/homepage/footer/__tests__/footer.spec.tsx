import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from '../../../../tests/utils/rendering';
import { Footer } from '../footer.component';

const data = [{ title: 'Test title', links: [{ label: 'Test link label', link: '#' }] }];

describe('Homepage: Footer', () => {
  it('should render title', () => {
    render(<Footer data={data} />);

    expect(screen.getByText(/Test title/i)).toBeInTheDocument();
  });

  it('should render links', () => {
    render(<Footer data={data} />);

    expect(screen.getByText(/Test link label/i)).toBeInTheDocument();
  });
});
