import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Events } from './events.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateEventInput } from './events.input';

export class EventsRepo {

    constructor(
        @InjectRepository(Events)
        private readonly eventsRepository: Repository<Events>
    ) { }


    // *************************************** Create Event Section ***************************************************
    // Create Event
    public createEvent = async (user: any, createEventInput: CreateEventInput) => {
        try {
            const newEvent = { ...createEventInput, user }
            return await this.eventsRepository.save(newEvent);
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }
}