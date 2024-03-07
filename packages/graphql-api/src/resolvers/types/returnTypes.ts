import { ObjectType, Field } from 'type-graphql';

@ObjectType('DeleteResult')
export class DeleteResult {
    @Field(() => Number)
    affected?: number | null;
}
