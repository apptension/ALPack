import { Faker, faker } from '@faker-js/faker';
import { EntityTarget, Repository } from 'typeorm';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';

import { AppDataSource } from '../data-source';

export const Factory = <T extends ObjectLiteral>(
  entityClass: EntityTarget<T>,
  factoryFc: (faker: Faker) => Partial<T>
) => {
  const repository: Repository<T> = AppDataSource.getRepository(entityClass);

  const save = async (defaults: Partial<T> = {}) => {
    const model = repository.create({
      ...factoryFc(faker),
      ...defaults,
    } as T);
    return await repository.save(model);
  };

  const saveMany = async (count: number, defaults: Partial<T> = {}) => {
    return Promise.all([...Array(count).keys()].map((i) => save(defaults)));
  };

  return {
    save,
    saveMany,
    repository,
  };
};
