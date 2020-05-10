import { createEvent } from '../../../graphql/mutations/createEvent';
import { graphqlRequest } from '../../../graphql/index.graphql';
import { EventTypes } from '../../types/index.types';
import { Dispatch } from 'redux';
import { toastr } from 'react-redux-toastr';
import { getEventsQuery } from '../../../graphql/query/getEvents';


// Get Events
export const getEvents = (variables: any) => async (dispatch: Dispatch) => {
    try {
        const res = await graphqlRequest(getEventsQuery, variables);
        dispatch({
            type: EventTypes.GET_EVENTS,
            payload: res?.getEvents
        })
    } catch (err) {
        toastr.error("Error", err.message);
    }
}

// Create Events
export const createEvents = (variables: any) => async (dispatch: Dispatch) => {
    try {
        const res = await graphqlRequest(createEvent, variables);
        dispatch({
            type: EventTypes.CREATE_EVENT,
            payload: { event: res.createEvent }
        })
    } catch (err) {
        toastr.error("Error", err.message);
    }
}


// Delete Event
export const deleteEvent = (_id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: EventTypes.DELETE_EVENT,
            payload: { _id }
        })
    } catch (err) {
        toastr.error("Error", err.message);
    }
}