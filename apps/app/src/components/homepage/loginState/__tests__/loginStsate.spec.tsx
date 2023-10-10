import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { UserRole } from '@alp/graphql-api/types';

import { sessionProviderFactory } from '../../../../tests/factories/sessionProviderFactory';
import { render } from '../../../../tests/utils/rendering';
import { LoginState } from '../loginState.component';

describe('Homepage: LoginState', () => {
  describe('when logged in', () => {
    it('renders `Go to app` button', () => {
      render(<LoginState />, {
        sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
      });

      expect(screen.getByText(/Go to app/i)).toBeInTheDocument();
    });
  });

  describe('when not logged in', () => {
    it('renders `Sign In` button', () => {
      render(<LoginState />);

      expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    });
  });
});
