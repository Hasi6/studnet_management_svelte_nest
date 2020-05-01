import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Events } from './events.entity';
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
        this.getEventById("5eabea609615995238647957")
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
        console.log(await this.eventsRepository.find())
    }
}