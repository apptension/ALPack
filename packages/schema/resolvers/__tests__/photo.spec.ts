import { testResolver } from '../../tests/utils/testResolver';
import { PhotoResolver } from '../photo';

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
      const { result } = await testResolver(PhotoResolver, source);
      expect((result.data?.['allPhotos'] as []).length).toEqual(0);
    });
  });
});
