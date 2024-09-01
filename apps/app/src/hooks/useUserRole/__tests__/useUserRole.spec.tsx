import { UserRole } from '@alp/graphql-api/types';

import { useUserRole } from '..';
import { sessionProviderFactory } from '../../../tests/factories/sessionProviderFactory';
import { renderHook } from '../../../tests/utils/rendering';

describe('useUserRole', () => {
  describe('when user is not logged in', () => {
    it('should return null', () => {
      const { result } = renderHook(() => useUserRole());
      expect(result.current).toEqual(null);
    });
  });

  describe('when user has admin role', () => {
    it('should return admin role', () => {
      const { result } = renderHook(() => useUserRole(), {
        sessionProviderProps: sessionProviderFactory({ role: UserRole.ADMIN }),
      });
      expect(result.current).toEqual(UserRole.ADMIN);
    });
  });

  describe('when user has user role', () => {
    it('should return user role', () => {
      const { result } = renderHook(() => useUserRole(), {
        sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
      });
      expect(result.current).toEqual(UserRole.USER);
    });
  });
});
