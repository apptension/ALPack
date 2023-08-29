import { Field, InputType } from 'type-graphql';
import { UserEntity } from '../../entity';

@InputType({ description: 'Update profile data' })
export class UpdateProfileInput implements Partial<UserEntity> {
    @Field(() => String)
    name: string;
}