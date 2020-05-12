import { Injectable } from '@nestjs/common';
import { EventsRepo } from './events.repo';
import { CreateEventInput } from './events.input';

@Injectable()
export class EventsService {

    constructor(
        private readonly eventsRepo: EventsRepo
    ) { }



    // ********************************************* Create Event Section *****************************************************
    // Create Event
    public createEvent = async (user: any, createEventInput: CreateEventInput) => {
        return await this.eventsRepo.createEvent(user, createEventInput)
    }

    // ********************************************* Get Event Section *****************************************************
    // Get Events With Pagination
    public getEventsWithPagination = async (page: number) => {
        return await this.eventsRepo.getEventsWithPagination(page)
    }

    // Get Single Event
    public getSingleEvent = async (_id: string) => {
        return await this.eventsRepo.getEventById(_id)
    }

    // ********************************************* Edit Event Section *****************************************************
    // Add Participant To Event
    public addParticipants = async (_id: string, userId: string) => {
        return this.eventsRepo.addParticipants(_id, userId);
    }

}
