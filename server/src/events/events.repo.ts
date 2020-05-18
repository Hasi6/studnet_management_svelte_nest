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

        this.getEventById("5eba7bf778640931ac05bd0b")

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
        try {
            return await this.eventsRepository.findById(_id).populate('participants', ['image', 'username', '_id', 'email']);
        } catch (err) {
            throw new InternalServerErrorException();
        }
    }

    // Get Events With Pagination
    public getEventsWithPagination = async (page: number) => {
        try {
            const perPage = 20;
            const events = await this.eventsRepository.find().populate('participants', ['image', 'username', '_id', 'email']).skip(Math.abs(perPage * page - perPage))
                .limit(perPage)
                .sort({ createdAt: -1 });

            const allEvents = await this.eventsRepository.find().countDocuments()
            const pages = Math.abs(Math.ceil(allEvents / perPage))
            return { pages, page, all: allEvents, events }
        } catch (err) {
            throw new InternalServerErrorException();
        }
    }

    //*************************************** Edit Event Section ***************************************************
    // Add Participants To Event
    public addParticipants = async (_id: string, userId: string) => {
        try {
            await this.eventsRepository.updateOne({ _id }, { $addToSet: { participants: { $each: [userId] } } });
            return true;
        } catch (err) {
            throw new InternalServerErrorException();
        }
    }

    // Remove Participants To Event
    public removeParticipants = async (_id: string, userId: string) => {
        try {
            await this.eventsRepository.updateOne({ _id }, { $pull: { participants: userId } });
            return true;
        } catch (err) {
            throw new InternalServerErrorException();
        }
    }
}