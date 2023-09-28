import { CRUDItem } from '../../entity';
import { Factory } from '../factory';

export const CrudItemFactory = Factory(CRUDItem, (faker) => ({
  name: faker.string.uuid(),
}));
