import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/AuthGuard';
import { CreateEventInput } from './events.input';

@Resolver('Events')
export class EventsResolver {


    // constructor(

    // ) { }


    @Query()
    @UseGuards(AuthGuard)
    getEvents(@Args('page') page: number) {
        console.log(page)
        return [{ _id: "1", location: { location: "test", lat: 34.45, lng: 5456.7 }, title: "test", description: "Test", createdAt: "45", updatedAt: "45" }]
    }


    @Mutation()
    @UseGuards(AuthGuard)
    createEvent(@Args('createEventInput') createEventInput: CreateEventInput, @Context() ctx: any) {
        console.log(ctx.user)
        // console.log(createEventInput)
        return createEventInput
    }

}