import { times } from 'ramda';

import { AddCrudItemMutation, CrudItem, UpdateCrudItemMutation } from '@alp/api-client';
import {
  composeMockedListQueryResult,
  composeMockedQueryResult,
  createDeepFactory,
  makeId,
} from '@alp/api-client/tests/utils';

import { addCRUDItemMutation, allCrudItemsQuery, detailsCrudItemQuery, updateCRUDItemMutation } from '@app/graphql';

export const crudItemFactory = createDeepFactory<Partial<CrudItem>>((faker) => ({
  id: makeId(32),
  name: faker.string.alpha(10),
}));

export const fillCrudDemoItemDetailsQuery = (data = crudItemFactory(), variables = {}) =>
  composeMockedQueryResult(detailsCrudItemQuery, {
    variables,
    data: {
      crudDemoItem: data,
    },
  });

export const fillCRUDListQuery = (data = times(() => crudItemFactory(), 3)) =>
  composeMockedListQueryResult(allCrudItemsQuery, 'allCrudItems', 'CRUDItem', { data });

export const fillAddCRUDItemQuery = (name: string, data: AddCrudItemMutation) =>
  composeMockedQueryResult(addCRUDItemMutation, {
    variables: { newCrudItemData: { name } },
    data,
  });

export const fillUpdateCRUDItemQuery = (id: string, name: string, data: UpdateCrudItemMutation) =>
  composeMockedQueryResult(updateCRUDItemMutation, {
    variables: { updateCrudItemData: { name, id } },
    data,
  });
