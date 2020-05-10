import { InternalServerErrorException } from '@nestjs/common';
import { CreateEventInput } from './events.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEvents } from './events.model';


export class EventsRepo {

    constructor(
        @InjectModel('events')
        private readonly eventsRepository: Model<IEvents>,
    ) {
    }


    // *************************************** Create Event Section ***************************************************
    // Create Event
    public createEvent = async (user: any, createEventInput: CreateEventInput) => {
        try {
            const nEvent = { ...createEventInput, user }
            const newEvent = new this.eventsRepository(nEvent)
            return await newEvent.save()
        } catch (err) {
            throw new InternalServerErrorException()
        }
    }

    // *************************************** Get Event Section ***************************************************
    // Get Event By Id
    public getEventById = async (_id: string) => {
        return await this.eventsRepository.findById(_id)
    }

    // Get Events With Pagination
    public getEventsWithPagination = async (page: number) => {
        const perPage = 20;
        const events = await this.eventsRepository.find().skip(Math.abs(perPage * page - perPage))
            .limit(perPage)
            .sort({ createdAt: -1 });

        const allEvents = await this.eventsRepository.find().countDocuments()
        const pages = Math.abs(Math.ceil(allEvents / perPage))
        return { pages, page, all: allEvents, events }
    }
}