import { authSessionFactory, testResolver } from '../../../tests';
import { UserRole } from '../../../types';
import { PhotoResolver } from '../../photo/photo.resolver';

describe('Photo resolver', () => {
  describe('allPhotos query', () => {
    it('should return empty list', async () => {
      const source = /* GraphQL */ `
        query AllPhotos {
          allPhotos {
            id
            name
          }
        }
      `;
      const { result } = await testResolver(PhotoResolver, source, {
        contextValue: {
          authSession: authSessionFactory({
            role: UserRole.USER,
          }),
        },
      });
      expect(result.errors).toBeUndefined();
      expect((result.data?.['allPhotos'] as []).length).toEqual(0);
    });
  });
});
