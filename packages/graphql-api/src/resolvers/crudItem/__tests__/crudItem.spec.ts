import { CrudItemFactory, authSessionFactory } from '../../../tests/factories';
import { TestResolverOptions, testResolver } from '../../../tests/utils/testResolver';
import { UserRole } from '../../../types';
import { crudItemPermissions } from '../crudItem.permissions';
import { CRUDItemResolver } from '../crudItem.resolver';

const runQuery = (source: string, options: TestResolverOptions = {}) =>
  testResolver(CRUDItemResolver, source, {
    permissions: crudItemPermissions,
    ...options,
  });

const getContextForRole = (role: UserRole) => ({
  contextValue: {
    authSession: authSessionFactory({
      role,
    }),
  },
});

describe('CRUDItem resolver', () => {
  describe('allCrudItems query', () => {
    const allQuerySource = /* GraphQL */ `
      query allCRUDItems {
        allCrudItems {
          id
          name
        }
      }
    `;

    describe.each([UserRole.USER, UserRole.ADMIN])('when authorized as %p', (role) => {
      const options = getContextForRole(role);

      it('should return empty list', async () => {
        const { result } = await runQuery(allQuerySource, options);
        expect((result.data?.['allCrudItems'] as []).length).toEqual(0);
      });

      it('should return not empty list', async () => {
        await CrudItemFactory.saveMany(5);
        const { result } = await runQuery(allQuerySource, options);
        expect((result.data?.['allCrudItems'] as []).length).toEqual(5);
      });
    });

    describe('when unauthorized', () => {
      it('should return unauthorized error', async () => {
        const { result } = await runQuery(allQuerySource);
        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });

  describe('addCrudItem mutation', () => {
    const addMutationSource = /* GraphQL */ `
      mutation addCrudItem($newCrudItemData: AddCRUDItemInput!) {
        addCrudItem(newCrudItemData: $newCrudItemData) {
          id
          name
        }
      }
    `;

    const crudItemName = 'test';

    const runAddQuery = (options: TestResolverOptions = {}) =>
      runQuery(addMutationSource, {
        variableValues: {
          newCrudItemData: {
            name: crudItemName,
          },
        },
        ...options,
      });

    describe('when authorized as admin', () => {
      it('should add new crud item', async () => {
        const { result } = await runAddQuery(getContextForRole(UserRole.ADMIN));

        expect((result.data?.['addCrudItem'] as { name: string }).name).toEqual(crudItemName);
      });
    });

    describe('when authorized as user', () => {
      it('should throw an error', async () => {
        const { result } = await runAddQuery(getContextForRole(UserRole.USER));

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });

    describe('when unauthorized', () => {
      it('should throw an error', async () => {
        const { result } = await runAddQuery();

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });

  describe('updateCrudItem mutation', () => {
    const updateMutationSource = /* GraphQL */ `
      mutation updateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {
        updateCrudItem(updateCrudItemData: $updateCrudItemData) {
          name
        }
      }
    `;

    const crudItemName = 'newName';

    const runUpdateQuery = (id: string, options: TestResolverOptions = {}) =>
      runQuery(updateMutationSource, {
        variableValues: {
          updateCrudItemData: {
            id,
            name: crudItemName,
          },
        },
        ...options,
      });

    describe('when authorized as admin', () => {
      it('should update crud item', async () => {
        const item = await CrudItemFactory.save({
          name: 'name to update',
        });
        const { result } = await runUpdateQuery(item.id, getContextForRole(UserRole.ADMIN));

        expect((result.data?.['updateCrudItem'] as { name: string }).name).toEqual(crudItemName);
      });
    });

    describe('when authorized as user', () => {
      it('should throw an error', async () => {
        const item = await CrudItemFactory.save({
          name: 'name to update',
        });
        const { result } = await runUpdateQuery(item.id, getContextForRole(UserRole.USER));

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });

    describe('when unauthorized', () => {
      it('should throw an error', async () => {
        const item = await CrudItemFactory.save({
          name: 'name to update',
        });
        const { result } = await runUpdateQuery(item.id);

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });

  describe('deleteCrudItem mutation', () => {
    const deleteMutationSource = /* GraphQL */ `
      mutation deleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {
        deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {
          affected
        }
      }
    `;

    const runDeleteQuery = (id: string, options: TestResolverOptions = {}) =>
      runQuery(deleteMutationSource, {
        variableValues: {
          deleteCrudItemData: {
            id,
          },
        },
        ...options,
      });

    describe('when authorized as admin', () => {
      it('should delete crud item', async () => {
        const item = await CrudItemFactory.save({
          name: 'name',
        });
        const { result } = await runDeleteQuery(item.id, getContextForRole(UserRole.ADMIN));

        expect((result.data?.['deleteCrudItem'] as { affected: number }).affected).toBe(1);
      });
    });

    describe('when authorized as user', () => {
      it('should throw an error', async () => {
        const item = await CrudItemFactory.save({
          name: 'name to update',
        });
        const { result } = await runDeleteQuery(item.id, getContextForRole(UserRole.USER));

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });

    describe('when unauthorized', () => {
      it('should throw an error', async () => {
        const item = await CrudItemFactory.save({
          name: 'name to update',
        });
        const { result } = await runDeleteQuery(item.id);

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });

  describe('crudItem query', () => {
    const oneQuerySource = /* GraphQL */ `
      query crudItem($id: ID!) {
        crudItem(id: $id) {
          id
          name
        }
      }
    `;

    describe.each([UserRole.USER, UserRole.ADMIN])('when authorized as %p', (role) => {
      const options = getContextForRole(role);

      it('should return single crud item', async () => {
        const item = await CrudItemFactory.save({
          name: 'test',
        });

        const { result } = await runQuery(oneQuerySource, {
          variableValues: {
            id: item.id,
          },
          ...options,
        });

        expect((result.data?.['crudItem'] as { name: string }).name).toEqual(item.name);
      });
    });

    describe('when unauthorized', () => {
      it('should return unauthorized error', async () => {
        const item = await CrudItemFactory.save({
          name: 'test',
        });

        const { result } = await runQuery(oneQuerySource, {
          variableValues: {
            id: item.id,
          },
        });

        expect(result.errors).toHaveLength(1);
        expect(result.errors?.[0]).toBeInstanceOf(Error);
        expect(result.data).toBeNull();
      });
    });
  });
});
