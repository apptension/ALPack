import { Faker, faker } from '@faker-js/faker';
import { mergeDeepRight } from 'ramda';

import { DeepPartial } from '@ab/core/utils/types';

export const createFactory =
  <T>(creator: () => T) =>
  (overrides?: Partial<T>) => ({
    ...creator(),
    ...overrides,
  });

export const createDeepFactory =
  <T>(creator: (faker: Faker) => T) =>
  (overrides: DeepPartial<T> = {}) =>
    mergeDeepRight<any, any>(creator(faker), overrides) as T;
