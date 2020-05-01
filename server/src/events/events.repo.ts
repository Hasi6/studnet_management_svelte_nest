import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Events } from './events.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateEventInput } from './events.input';

export class EventsRepo {

    constructor(
        @InjectRepository(Events)
        private readonly eventsRepository: Repository<Events>
    ) {

        this.getEventById("5eabea609615995238647957")

    }


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

    // *************************************** Get Event Section ***************************************************
    // Get Event By Id
    public getEventById = async (_id: string) => {
        console.log(await (await this.eventsRepository.findOne(_id)).user)
    }
}