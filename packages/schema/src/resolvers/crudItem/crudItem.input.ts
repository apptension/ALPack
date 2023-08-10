import { Field, InputType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

import { CRUDItem } from '../../entity';

@InputType({ description: 'Update crudItem data' })
export class UpdateCRUDItemInput implements Partial<CRUDItem> {
    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;
}

@InputType({ description: 'Delete crudItem' })
export class DeleteCRUDItemInput implements Partial<CRUDItem> {
    @Field(() => String)
    @IsNotEmpty()
    id: string;
}

@InputType({ description: 'New crudItem data' })
export class AddCRUDItemInput implements Partial<CRUDItem> {
    @Field(() => String)
    @IsNotEmpty()
    name: string;
}