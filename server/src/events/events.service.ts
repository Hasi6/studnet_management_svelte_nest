import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { EventsRepo } from './events.repo';
import { CreateEventInput } from './events.input';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepo: EventsRepo) {}

  // ********************************************* Create Event Section *****************************************************
  // Create Event
  public createEvent = async (
    user: any,
    createEventInput: CreateEventInput,
  ) => {
    return await this.eventsRepo.createEvent(user, createEventInput);
  };

  // ********************************************* Get Event Section *****************************************************
  // Get Events With Pagination
  public getEventsWithPagination = async (page: number) => {
    return await this.eventsRepo.getEventsWithPagination(page);
  };

  // Get Single Event
  public getSingleEvent = async (_id: string) => {
    return await this.eventsRepo.getEventById(_id);
  };

  // ********************************************* Edit Event Section *****************************************************
  // Add Participant To Event
  public addParticipants = async (_id: string, userId: string) => {
    return this.eventsRepo.addParticipants(_id, userId);
  };

  // Remove Participant To Event
  public removeParticipants = async (_id: string, userId: string) => {
    return this.eventsRepo.removeParticipants(_id, userId);
  };

  // ********************************************* Delete Event Section *****************************************************
  // Delete Event By Id
  public deleteEventById = async (_id: string, user: string) => {
    const event = await this.eventsRepo.getEventById(_id);

    if (!event) {
      throw new NotFoundException('Event is Not Found');
    }
    if (event.user._id !== user) {
      return new UnauthorizedException(
        'You are unauthorized to delete this event',
      );
    }
    return this.eventsRepo.deleteEventById(_id);
  };

  // Delete Event By User
  public deleteEventByUser = async (user: string) => {
    return this.eventsRepo.deleteEventsByUser(user);
  };
}
