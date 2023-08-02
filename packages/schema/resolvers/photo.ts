import { Arg, Resolver, Query, Mutation, ID } from 'type-graphql';
import { Repository } from 'typeorm';
import { GraphQLError } from 'graphql';

import { Photo } from '../entity';
import { AppDataSource } from '../data-source';
import { AddPhotoInput } from './inputs/addPhoto.input';

@Resolver(() => Photo)
export class PhotoResolver {
    private readonly photoRepository: Repository<Photo>;

    constructor() {
        this.photoRepository = AppDataSource.getRepository(Photo);
    }

    @Query(() => Photo)
    async photo(@Arg('id', () => ID) id: string) {
        const photo = await this.photoRepository.findOneBy({ id });
        if (!photo) {
            throw new GraphQLError('Invalid photo ID');
        }
        return photo;
    }

    @Query(() => [Photo], { description: 'Return all photos in db' })
    allPhotos() {
        return this.photoRepository.find();
    }

    @Mutation(() => Photo)
    addPhoto(@Arg('data') newPhotoData: AddPhotoInput) {
        const photo = this.photoRepository.create(newPhotoData);
        return this.photoRepository.save(photo);
    }
}