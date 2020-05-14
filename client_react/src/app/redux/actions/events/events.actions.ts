import { createEvent, addParticipantsQuery, removeParticipantsQuery } from '../../../graphql/mutations/createEvent';
import { graphqlRequest, } from '../../../graphql/index.graphql';
import { EventTypes } from '../../types/index.types';
import { Dispatch } from 'redux';
import { toastr } from 'react-redux-toastr';
import { getEventsQuery, getSingleEventQuery } from '../../../graphql/query/getEvents';
import { StoreState } from '../../reducers/index';
import { IUser } from '../../../model/User.model';


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
            return;
        }
        dispatch({
            type: EventTypes.CREATE_EVENT,
            payload: { event: res?.getSingleEvent }
        })
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
};


// Add Participants 
export const addParticipants = (variables: any) => async (dispatch: Dispatch, getState: Function) => {

    try {
        const { username, email, _id, image } = getState().auth?.user;
        const user: IUser = { username, email, _id, image }
        const res = await graphqlRequest(addParticipantsQuery, variables);
        console.log(res)
        if (res.addParticipant) {
            dispatch({
                type: EventTypes.ADD_PARTICIPANT,
                payload: { _id: variables.id, user }
            });
        }


    } catch (err) {
        toastr.error("Error", err.message)
    }
}

// Add Participants 
export const removeParticipants = (variables: any) => async (dispatch: Dispatch, getState: StoreState) => {

    console.log(getState);
    try {
        const res = await graphqlRequest(removeParticipantsQuery, variables);
        console.log(res)
        // dispatch({
        //     type: EventTypes.ADD_PARTICIPANT,
        //     payload: 
        // })
    } catch (err) {
        toastr.error("Error", err.message)
    }
}