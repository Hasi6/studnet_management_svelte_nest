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
    @UseGuards(AuthGuard)
    getEvents(@Args('page') page: number) {
        return this.eventsService.getEventsWithPagination(page)
    }


    @Mutation()
    @UseGuards(AuthGuard)
    createEvent(@Args('createEventInput') createEventInput: CreateEventInput, @Context() ctx: any) {
        return this.eventsService.createEvent(ctx.user._id, createEventInput)
    }

    @ResolveField()
    user(@Parent() parent: any) {
        return this.userService.getUserById(parent.user);
    }

}