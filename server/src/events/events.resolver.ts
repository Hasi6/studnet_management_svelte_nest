import { Resolver, Query, Args, Mutation, Context, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/AuthGuard';
import { CreateEventInput } from './events.input';
import { EventsService } from './events.service';
import { UserService } from '../user/user.service';

@Resolver('Event')
export class EventsResolver {


    constructor(
        private readonly eventsService: EventsService,
        private readonly userService: UserService
    ) { }


    @Query()
    getEvents(@Args('page') page: number) {
        return this.eventsService.getEventsWithPagination(page)
    }

    @Query()
    getSingleEvent(@Args('id') id: string) {
        return this.eventsService.getSingleEvent(id)
    }


    @Mutation()
    @UseGuards(AuthGuard)
    createEvent(@Args('createEventInput') createEventInput: CreateEventInput, @Context() ctx: any) {
        return this.eventsService.createEvent(ctx.user._id, createEventInput)
    }


    @Mutation()
    @UseGuards(AuthGuard)
    addParticipant(@Args('id') id: string, @Context() ctx: any) {
        return this.eventsService.addParticipants(id, ctx.user._id);
    }

    @Mutation()
    @UseGuards(AuthGuard)
    removeParticipant(@Args('id') id: string, @Context() ctx: any) {
        return this.eventsService.removeParticipants(id, ctx.user._id);
    }

    @ResolveField()
    user(@Parent() parent: any) {
        return this.userService.getUserById(parent.user);
    }

}