import { times } from 'ramda';

import { AddCrudItemMutation, CrudItem, UpdateCrudItemMutation } from '@ab/api-client';
import {
  composeMockedListQueryResult,
  composeMockedQueryResult,
  createDeepFactory,
  makeId,
} from '@ab/api-client/tests/utils';

import { addCRUDItemMutation, allCrudItemsQuery, detailsCrudItemQuery, updateCRUDItemMutation } from '@app/graphql';

export const crudItemFactory = createDeepFactory<Partial<CrudItem>>((faker) => ({
  id: makeId(32),
  name: faker.string.alpha(10),
}));

export const fillCrudDemoItemDetailsQuery = (data = crudItemFactory(), variables = {}) => {
  return composeMockedQueryResult(detailsCrudItemQuery, {
    variables,
    data: {
      crudDemoItem: data,
    },
  });
};

export const fillCRUDListQuery = (data = times(() => crudItemFactory(), 3)) => {
  return composeMockedListQueryResult(allCrudItemsQuery, 'allCrudItems', 'CRUDItem', { data });
};

export const fillAddCRUDItemQuery = (name: string, data: AddCrudItemMutation) =>
  composeMockedQueryResult(addCRUDItemMutation, {
    variables: { newCrudItemData: { name } },
    data: data,
  });

export const fillUpdateCRUDItemQuery = (id: string, name: string, data: UpdateCrudItemMutation) =>
  composeMockedQueryResult(updateCRUDItemMutation, {
    variables: { updateCrudItemData: { name, id } },
    data: data,
  });
