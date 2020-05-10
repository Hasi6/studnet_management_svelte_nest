import { createReducer } from "../util/reducerUtil"
import { EventTypes } from '../../types/index.types';
import { IEvents } from '../../../model/User.model';


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
        events: [...state.events, event]
    }
}

// Delete Event
const deleteEvent = (state: EventsReducer, { _id }: { _id: string }) => {
    const events = state.events.filter((evt: IEvents) => evt._id !== _id)

    return {
        ...state,
        events
    }

}




export default createReducer(initialState, {
    [EventTypes.GET_EVENTS]: getEvents,
    [EventTypes.CREATE_EVENT]: addNewEvent,
    [EventTypes.DELETE_EVENT]: deleteEvent,
})