import { createReducer } from "../util/reducerUtil"
import { EventTypes } from '../../types/index.types';
import { IEvents } from '../../../model/User.model';


export interface EventsReducer {
    events: IEvents[]
}

const initialState: EventsReducer = {
    events: []
}

// Get Events
const getEvents = (state: EventsReducer, { events }: { events: IEvents[] }) => {
    return {
        ...state,
        events: [...state.events, ...events]
    }
}

// Add New Event
const addNewEvent = (state: EventsReducer, { event }: { event: IEvents }) => {
    return {
        ...state,
        events: [...state.events, event]
    }
}




export default createReducer(initialState, {
    [EventTypes.GET_EVENTS]: getEvents,
    [EventTypes.CREATE_EVENT]: addNewEvent,
})