import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { UserRole } from '@ab/schema/types';

import { sessionProviderFactory } from '../../../tests/factories/sessionProviderFactory';
import { render } from '../../../tests/utils/rendering';
import { LoginState } from '../loginState.component';

describe('Home: Component', () => {
  describe('when logged in', () => {
    it('renders Sign Out', () => {
      render(<LoginState />, {
        sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
      });

      expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
    });
  });

  describe('when not logged in', () => {
    it('renders Sign In', () => {
      render(<LoginState />);

      expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    });
  });
});
