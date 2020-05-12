import { createEvent } from '../../../graphql/mutations/createEvent';
import { graphqlRequest, } from '../../../graphql/index.graphql';
import { EventTypes } from '../../types/index.types';
import { Dispatch } from 'redux';
import { toastr } from 'react-redux-toastr';
import { getEventsQuery, getSingleEventQuery } from '../../../graphql/query/getEvents';


// Get Events
export const getEvents = (variables: any) => async (dispatch: Dispatch) => {
    console.log(variables)
    try {
        const res = await graphqlRequest(getEventsQuery, variables);
        dispatch({
            type: EventTypes.GET_EVENTS,
            payload: res?.getEvents
        })
    } catch (err) {
        toastr.error("Error", err.message);
    }
};


// Get Single Event
export const getSingleEvent = (variables: any, history: any) => async (dispatch: Dispatch) => {

    try {
        const res = await graphqlRequest(getSingleEventQuery, variables)
        if (!res?.getSingleEvent) {
            history.push("/notFound")
        }
    } catch (err) {
        toastr.error("Error", "Error")
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