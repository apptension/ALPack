import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class DeleteResult {
    @Field(() => Number)
    affected?: number | null;
}
