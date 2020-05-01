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

}
