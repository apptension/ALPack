import { UserEntity } from '../../entity';
import { UserRole } from '../../types';
import { Factory } from '../factory';

export const UserEntityFactory = Factory(UserEntity, (faker) => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: UserRole.USER,
}));
