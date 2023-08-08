import { Arg, Resolver, Query, Mutation, ID, } from 'type-graphql';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { CRUDItem } from '../../entity';
import { DeleteResult } from '../types';
import { AddCRUDItemInput, UpdateCRUDItemInput, DeleteCRUDItemInput } from './crudItem.input';

@Resolver(() => CRUDItem)
export class CRUDItemResolver {
    private readonly crudItemRepository: Repository<CRUDItem>;

    constructor() {
        this.crudItemRepository = AppDataSource.getRepository(CRUDItem);
    }

    @Query(() => CRUDItem)
    async crudItem(@Arg('id', () => ID) id: string) {
        const crudItem = await this.crudItemRepository.findOneBy({ id });
        if (!crudItem) {
            throw new GraphQLError('Invalid crudItem ID');
        }
        return crudItem;
    }

    @Query(() => [CRUDItem], { description: 'Return all crudItems from db' })
    async allCrudItems() {
        return await this.crudItemRepository.find();
    }

    @Mutation(() => CRUDItem)
    async addCrudItem(@Arg('newCrudItemData') newCrudItemData: AddCRUDItemInput) {
        const crudItem = this.crudItemRepository.create(newCrudItemData);
        return await this.crudItemRepository.save(crudItem);
    }

    @Mutation(() => CRUDItem)
    async updateCrudItem(@Arg('updateCrudItemData') updateCrudItemData: UpdateCRUDItemInput) {
        const crudItem = await this.crudItemRepository.findOneBy({ id: updateCrudItemData.id });
        if (!crudItem) {
            throw new GraphQLError('Invalid crudItem ID');
        }
        return await this.crudItemRepository.save({ name: updateCrudItemData.name, id: updateCrudItemData.id })
    }

    @Mutation(() => DeleteResult)
    async deleteCrudItem(@Arg('deleteCrudItemData') deleteCrudItemData: DeleteCRUDItemInput): Promise<DeleteResult> {
        return await this.crudItemRepository.delete({ id: deleteCrudItemData.id });
    }
}