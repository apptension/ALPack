import { UserEntity } from '../../../entity';
import { UserEntityFactory, authSessionFactory } from '../../../tests/factories';
import { TestResolverOptions, testResolver } from '../../../tests/utils/testResolver';
import { UserRole } from '../../../types';
import { userPermissions } from '../user.permissions';
import { UserResolver } from '../user.resolver';

const runQuery = (source: string, options: TestResolverOptions = {}) =>
  testResolver(UserResolver, source, {
    permissions: userPermissions,
    ...options,
  });

const getContextForRole = (role: UserRole, { name, email }: UserEntity) => ({
  contextValue: {
    authSession: authSessionFactory({
      name,
      email,
      role,
    }),
  },
});

describe('UserEntity resolver', () => {
  describe('me query', () => {
    const meQuerySource = /* GraphQL */ `
      query meQuery {
        me {
          id
          email
          name
        }
      }
    `;

    describe.each([UserRole.USER, UserRole.ADMIN])('when authorized as %p', (role) => {
      it('should return user profile', async () => {
        const user = await UserEntityFactory.save({ role });
        const options = getContextForRole(role, user);
        const { result } = await runQuery(meQuerySource, {
          ...options,
        });

        expect((result.data?.['me'] as { name: string }).name).toEqual(user.name);
      });
    });

    describe('when unauthorized', () => {
      it('should return unauthorized error', async () => {
        const { result } = await runQuery(meQuerySource);

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });

  describe('updateProfile mutation', () => {
    const updateMutationSource = /* GraphQL */ `
      mutation updateProfile($updateProfileData: UpdateProfileInput!) {
        updateProfile(updateProfileData: $updateProfileData) {
          name
        }
      }
    `;

    const newName = 'new name';

    const runUpdateQuery = (options: TestResolverOptions = {}) =>
      runQuery(updateMutationSource, {
        variableValues: {
          updateProfileData: {
            name: newName,
          },
        },
        ...options,
      });

    describe.each([UserRole.USER, UserRole.ADMIN])('when authorized as %p', (role) => {
      it('should update user profile', async () => {
        const user = await UserEntityFactory.save({ role });
        const { result } = await runUpdateQuery(getContextForRole(UserRole.ADMIN, user));

        expect((result.data?.['updateProfile'] as { name: string }).name).toEqual(newName);
      });
    });

    describe('when unauthorized', () => {
      it('should throw an error', async () => {
        const { result } = await runUpdateQuery();

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });
});
