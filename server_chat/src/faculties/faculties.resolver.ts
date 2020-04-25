import { Resolver, Query, Subscription } from "@nestjs/graphql";
import { PubSub } from 'graphql-subscriptions'
import { FacultiesService } from './faculties.service';
const pubSub = new PubSub();

@Resolver('Faculties')
export class FacultiesResolver {
    constructor(
        private readonly facultiesService: FacultiesService
    ) { }


    @Query()
    faculties() {
        pubSub.publish('commentAdded', "Hasi");
        return this.facultiesService.getAllFaculties()
    }

    @Subscription()
    commentAdded() {
        return pubSub.asyncIterator('commentAdded');
    }

}