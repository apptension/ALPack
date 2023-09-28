import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { UserRole } from '@ab/graphql-api/types';

import { sessionProviderFactory } from '../../../../tests/factories/sessionProviderFactory';
import { render } from '../../../../tests/utils/rendering';
import { Header } from '../header.component';

const links = [
  { link: '#', label: 'Home' },
  { link: `#features`, label: 'Features' },
];

describe('Homepage: Header', () => {
  it('renders `Features` button', () => {
    render(<Header links={links} />);

    expect(screen.getByText(/Features/i)).toBeInTheDocument();
  });

  describe('when logged in', () => {
    it('renders `Go to app` button', () => {
      render(<Header links={links} />, {
        sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
      });

      expect(screen.getByText(/Go to app/i)).toBeInTheDocument();
    });
  });

  describe('when not logged in', () => {
    it('renders `Sign In` button', () => {
      render(<Header links={links} />);

      expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    });
  });
});
