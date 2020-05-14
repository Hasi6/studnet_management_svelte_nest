import { createReducer } from "../util/reducerUtil"
import { EventTypes } from '../../types/index.types';
import { IEvents, IUser } from '../../../model/User.model';


export interface EventsReducer {
    events: IEvents[],
    pages: number,
    page: number,
    all: number
}

const initialState: EventsReducer = {
    events: [],
    pages: 0,
    page: 0,
    all: 0
}

// Get Events
const getEvents = (state: EventsReducer, { events, pages, page, all }: { events: IEvents[], page: number, pages: number, all: number }) => {
    return {
        ...state,
        events: [...state.events, ...events],
        pages,
        page,
        all
    }
}

// Add New Event
const addNewEvent = (state: EventsReducer, { event }: { event: IEvents }) => {
    return {
        ...state,
        events: [...state.events, event],
        all: state.all + 1
    }
}

// Delete Event
const deleteEvent = (state: EventsReducer, { _id }: { _id: string }) => {
    const events = state.events.filter((evt: IEvents) => evt._id !== _id)
    return {
        ...state,
        events
    }
};


// Add Participants
const addParticipants = (state: EventsReducer, { _id, user }: { _id: string, user: IUser }) => {
    console.log({ _id, user })
    const event: IEvents = state.events.filter((event: IEvents) => event._id === _id)[0];
    event.participants = [...event.participants, user]
    let allEvents = state.events.filter((event: IEvents) => event._id !== _id);
    allEvents = [...allEvents, event]
    return {
        ...state,
        events: allEvents
    };
}




export default createReducer(initialState, {
    [EventTypes.GET_EVENTS]: getEvents,
    [EventTypes.CREATE_EVENT]: addNewEvent,
    [EventTypes.DELETE_EVENT]: deleteEvent,
    [EventTypes.ADD_PARTICIPANT]: addParticipants,
})