import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/AuthGuard';
import { CreateEventInput } from './events.input';
import { EventsService } from './events.service';

@Resolver('Events')
export class EventsResolver {


    constructor(
        private readonly eventsService: EventsService
    ) { }


    @Query()
    @UseGuards(AuthGuard)
    getEvents(@Args('page') page: number) {
        console.log(page)
        return [{ _id: "1", location: { location: "test", lat: 34.45, lng: 5456.7 }, title: "test", description: "Test", createdAt: "45", updatedAt: "45" }]
    }


    @Mutation()
    @UseGuards(AuthGuard)
    createEvent(@Args('createEventInput') createEventInput: CreateEventInput, @Context() ctx: any) {
        return this.eventsService.createEvent(ctx.user, createEventInput)
    }

}