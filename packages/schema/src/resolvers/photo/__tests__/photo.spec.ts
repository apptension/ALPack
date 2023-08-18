import { TestResolverOptions, authSessionFactory, testResolver } from '../../../tests';
import { UserRole } from '../../../types';
import { photoPermissions } from '../photo.permissions';
import { PhotoResolver } from '../photo.resolver';

describe('Photo resolver', () => {
  describe('allPhotos query', () => {
    const source = /* GraphQL */ `
      query AllPhotos {
        allPhotos {
          id
          name
        }
      }
    `;
    const runAllPhotosQuery = (options: TestResolverOptions = {}) =>
      testResolver(PhotoResolver, source, {
        permissions: photoPermissions,
        ...options,
      });

    describe('when authorized as user', () => {
      it('should return empty list', async () => {
        const { result } = await runAllPhotosQuery({
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

    describe('when authorized as admin', () => {
      it('should return empty list', async () => {
        const { result } = await runAllPhotosQuery({
          contextValue: {
            authSession: authSessionFactory({
              role: UserRole.ADMIN,
            }),
          },
        });
        expect(result.errors).toBeUndefined();
        expect((result.data?.['allPhotos'] as []).length).toEqual(0);
      });
    });

    describe('when unauthorized', () => {
      it('should return unauthorized error', async () => {
        const { result } = await runAllPhotosQuery();
        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });
});
