import { createReducer } from "../util/reducerUtil"
import { AuthTypes, EventTypes } from '../../types/index.types';
import { IUser, IEvents } from '../../../model/User.model';


export interface EventsReducer {
    events: IEvents[]
}

const initialState: EventsReducer = {
    events: []
}

// Get Events


export default createReducer(initialState, {
    [EventTypes.GET_EVENTS]: setCurrentUser,
})