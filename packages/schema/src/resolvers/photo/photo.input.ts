import { Field, InputType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

import { Photo } from '../../entity';

@InputType({ description: 'New photo data' })
export class AddPhotoInput implements Partial<Photo> {
    @Field(() => String)
    @IsNotEmpty()
    name: string;
}