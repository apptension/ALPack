import { testResolver } from '../../../tests/utils/testResolver';
import { CRUDItemResolver } from '../crudItem.resolver';

const allQuerySource = `query allCRUDItems {
    allCrudItems {
        id
        name
    }
}`;

const oneQuerySource = `query crudItem($id: ID!) {
    crudItem(id: $id) {
        id
        name
    }
}`;

const addMutationSource = `mutation addCrudItem($newCrudItemData: AddCRUDItemInput!) {
    addCrudItem(newCrudItemData: $newCrudItemData) {
        id
        name
    }
}`;

const updateMutationSource = `mutation updateCrudItem($updateCrudItemData: UpdateCRUDItemInput!) {
    updateCrudItem(updateCrudItemData: $updateCrudItemData) {
        name
    }
}`

const deleteMutationSource = `mutation deleteCrudItem($deleteCrudItemData: DeleteCRUDItemInput!) {
    deleteCrudItem(deleteCrudItemData: $deleteCrudItemData) {
        affected
    }
}`

describe('CRUDItem resolver', () => {
    describe('allCrudItems query', () => {
        it('should return empty list', async () => {
            const { result } = await testResolver(CRUDItemResolver, allQuerySource);
            expect((result.data?.['allCrudItems'] as []).length).toEqual(0);
        });
    });

    describe('addCrudItem mutation', () => {
        it('should add new crud item', async () => {
            const crudItemName = "test"
            const { result: addResult } = await testResolver(CRUDItemResolver, addMutationSource, {
                variableValues: {
                    newCrudItemData: {
                        name: crudItemName
                    }
                }
            });

            expect((addResult.data?.['addCrudItem'] as { name: string }).name).toEqual(crudItemName);
        });
    });


    describe('updateCrudItem mutation', () => {
        it('should add and update crud item', async () => {
            const crudItemName = "test"

            const { result: addResults } = await testResolver(CRUDItemResolver, addMutationSource, {
                variableValues: {
                    newCrudItemData: {
                        name: crudItemName
                    }
                }
            });

            expect((addResults.data?.['addCrudItem'] as { name: string }).name).toEqual(crudItemName);

            const newCrudItemName = 'newName'

            const { result: updateResults } = await testResolver(CRUDItemResolver, updateMutationSource, {
                variableValues: {
                    updateCrudItemData: {
                        id: (addResults.data?.['addCrudItem'] as { id: string }).id,
                        name: newCrudItemName
                    }
                }
            });

            expect((updateResults.data?.['updateCrudItem'] as { name: string }).name).toEqual(newCrudItemName);
        });
    });

    describe('deleteCrudItem mutation', () => {
        it('should add and delete crud item', async () => {
            const crudItemName = "test"

            const { result: addResults } = await testResolver(CRUDItemResolver, addMutationSource, {
                variableValues: {
                    newCrudItemData: {
                        name: crudItemName
                    }
                }
            });

            expect((addResults.data?.['addCrudItem'] as { name: string }).name).toEqual(crudItemName);

            const addedItemId = (addResults.data?.['addCrudItem'] as { id: string }).id

            const { result: oneResult } = await testResolver(CRUDItemResolver, oneQuerySource, {
                variableValues: {
                    id: addedItemId
                }
            });

            expect((oneResult.data?.['crudItem'] as { id: string }).id).toEqual(addedItemId);

            const { result: deleteResults } = await testResolver(CRUDItemResolver, deleteMutationSource, {
                variableValues: {
                    deleteCrudItemData: {
                        id: addedItemId,
                    }
                }
            });

            expect((deleteResults.data?.['deleteCrudItem'] as { affected: number }).affected).toBe(1);

            const { result: oneQueryResultAfterDelete } = await testResolver(CRUDItemResolver, oneQuerySource, {
                variableValues: {
                    id: addedItemId
                }
            });

            expect((oneQueryResultAfterDelete.data?.['crudItem'])).toBeFalsy();
        });
    });
});
