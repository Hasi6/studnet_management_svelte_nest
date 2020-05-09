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
        events
    }
}




export default createReducer(initialState, {
    [EventTypes.GET_EVENTS]: getEvents,
})