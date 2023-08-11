import { CrudItemFactory } from '../../../tests/factories';
import { testResolver } from '../../../tests/utils/testResolver';
import { CRUDItemResolver } from '../crudItem.resolver';

const allQuerySource = /* GraphQL */ `
  query allCRUDItems {
    allCrudItems {
      id
      name
    }
  }
`;

const oneQuerySource = /* GraphQL */ `
  query crudItem($id: ID!) {
    crudItem(id: $id) {
      id
      name
    }
  }
`;

const addMutationSource = /* GraphQL */ `
  mutation addCrudItem($newCrudItemData: AddCRUDItemInput!) {
    addCrudItem(newCrudItemData: $newCrudItemData) {
      id
      name
    }
  }
`;

const updateMutationSource = /* GraphQL */ `
  mutation updateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {
    updateCrudItem(updateCrudItemData: $updateCrudItemData) {
      name
    }
  }
`;

const deleteMutationSource = /* GraphQL */ `
  mutation deleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {
    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {
      affected
    }
  }
`;

describe('CRUDItem resolver', () => {
  describe('allCrudItems query', () => {
    it('should return empty list', async () => {
      const { result } = await testResolver(CRUDItemResolver, allQuerySource);
      expect((result.data?.['allCrudItems'] as []).length).toEqual(0);
    });

    it('should return not empty list', async () => {
      await CrudItemFactory.saveMany(5);
      const { result } = await testResolver(CRUDItemResolver, allQuerySource);
      expect((result.data?.['allCrudItems'] as []).length).toEqual(5);
    });
  });

  describe('addCrudItem mutation', () => {
    it('should add new crud item', async () => {
      const crudItemName = 'test';
      const { result: addResult } = await testResolver(CRUDItemResolver, addMutationSource, {
        variableValues: {
          newCrudItemData: {
            name: crudItemName,
          },
        },
      });

      expect((addResult.data?.['addCrudItem'] as { name: string }).name).toEqual(crudItemName);
    });
  });

  describe('updateCrudItem mutation', () => {
    it('should update crud item', async () => {
      const item = await CrudItemFactory.save({
        name: 'name to update',
      });

      const newCrudItemName = 'newName';

      const { result: updateResults } = await testResolver(CRUDItemResolver, updateMutationSource, {
        variableValues: {
          updateCrudItemData: {
            id: item.id,
            name: newCrudItemName,
          },
        },
      });

      expect((updateResults.data?.['updateCrudItem'] as { name: string }).name).toEqual(newCrudItemName);
    });
  });

  describe('deleteCrudItem mutation', () => {
    it('delete crud item', async () => {
      const item = await CrudItemFactory.save({
        name: 'test',
      });

      const { result: deleteResults } = await testResolver(CRUDItemResolver, deleteMutationSource, {
        variableValues: {
          deleteCrudItemData: {
            id: item.id,
          },
        },
      });

      expect((deleteResults.data?.['deleteCrudItem'] as { affected: number }).affected).toBe(1);

      const { result: oneQueryResultAfterDelete } = await testResolver(CRUDItemResolver, oneQuerySource, {
        variableValues: {
          id: item.id,
        },
      });

      expect(oneQueryResultAfterDelete.data?.['crudItem']).toBeFalsy();
    });
  });

  describe('crudItem query', () => {
    it('return single crud item', async () => {
      const item = await CrudItemFactory.save({
        name: 'test',
      });

      const { result: oneQueryResultAfterDelete } = await testResolver(CRUDItemResolver, oneQuerySource, {
        variableValues: {
          id: item.id,
        },
      });

      expect((oneQueryResultAfterDelete.data?.['crudItem'] as { name: string }).name).toEqual(item.name);
    });
  });
});
