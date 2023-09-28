import { Query, Resolver, Ctx, Mutation, Arg } from 'type-graphql';
import { Repository } from 'typeorm';
import { GraphQLError } from 'graphql';

import { UserEntity } from '../../entity';
import { AppDataSource } from '../../data-source';
import type { ApiContextType } from '../../types/context';
import { UpdateProfileInput } from '../../resolvers/user/user.inputs';

@Resolver(() => UserEntity)
export class UserResolver {
  private readonly userRepository: Repository<UserEntity>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  @Query(() => UserEntity)
  async me(@Ctx() ctx: ApiContextType) {
    const email = ctx.authSession?.user?.email;
    if (!email) {
      throw new GraphQLError('Invalid user');
    }
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new GraphQLError('Invalid user');
    }
    return user;
  }

  @Mutation(() => UserEntity)
  async updateProfile(@Arg('updateProfileData') updateProfileData: UpdateProfileInput, @Ctx() ctx: ApiContextType) {
    const email = ctx.authSession?.user?.email;
    if (!email) {
      throw new GraphQLError('Invalid user');
    }
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new GraphQLError('Invalid user');
    }

    return await this.userRepository.save({ name: updateProfileData.name, id: user.id });
  }
}