import {
  createEvent,
  addParticipantsQuery,
  removeParticipantsQuery,
} from "../../../graphql/mutations/createEvent";
import { graphqlRequest } from "../../../graphql/index.graphql";
import { EventTypes } from "../../types/index.types";
import { Dispatch } from "redux";
import { toastr } from "react-redux-toastr";
import {
  getEventsQuery,
  getSingleEventQuery,
} from "../../../graphql/query/getEvents";
import { StoreState } from "../../reducers/index";
import { IUser } from "../../../model/User.model";
import { deleteEventById } from "../../../graphql/mutations/deleteEvent";
import { Navigation } from "@material-ui/icons";

// Get Events
export const getEvents = (variables: any) => async (dispatch: Dispatch) => {
  console.log(variables);
  try {
    const res = await graphqlRequest(getEventsQuery, variables);
    dispatch({
      type: EventTypes.GET_EVENTS,
      payload: res?.getEvents,
    });
  } catch (err) {
    toastr.error("Error", err.message);
  }
};

// Get Single Event
export const getSingleEvent = (variables: any, history: any) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await graphqlRequest(getSingleEventQuery, variables);

    if (!res?.getSingleEvent) {
      history.push("/notFound");
      return;
    }
    dispatch({
      type: EventTypes.CREATE_EVENT,
      payload: { event: res?.getSingleEvent },
    });
  } catch (err) {
    toastr.error("Error", "Error");
  }
};

// Create Events
export const createEvents = (variables: any) => async (dispatch: Dispatch) => {
  try {
    const res = await graphqlRequest(createEvent, variables);
    dispatch({
      type: EventTypes.CREATE_EVENT,
      payload: { event: res.createEvent },
    });
  } catch (err) {
    toastr.error("Error", err.message);
  }
};

// Delete Event
export const deleteEvent = (_id: string, history: any) => async (
  dispatch: Dispatch
) => {
  try {
    const res = await graphqlRequest(deleteEventById, { id: _id });
    // console.log(res);
    if (res.deleteEventById) {
      dispatch({
        type: EventTypes.DELETE_EVENT,
        payload: { _id },
      });
      toastr.success("Success", "Event Deleted");
      history.push("/");
    }
  } catch (err) {
    toastr.error("Error", err.message);
  }
};

// Add Participants
export const addParticipants = (variables: any) => async (
  dispatch: Dispatch,
  getState: Function
) => {
  try {
    const { username, email, _id, image } = getState().auth?.user;
    const user: IUser = { username, email, _id, image };
    const res = await graphqlRequest(addParticipantsQuery, variables);
    if (res.addParticipant) {
      dispatch({
        type: EventTypes.ADD_PARTICIPANT,
        payload: { _id: variables.id, user },
      });
    }
  } catch (err) {
    toastr.error("Error", err.message);
  }
};

// Add Participants
export const removeParticipants = (variables: any) => async (
  dispatch: Dispatch,
  getState: Function
) => {
  const user = getState().auth?.user?._id;
  try {
    const res = await graphqlRequest(removeParticipantsQuery, variables);
    if (res.removeParticipant) {
      dispatch({
        type: EventTypes.REMOVE_PARTICIPANT,
        payload: { _id: variables.id, user },
      });
    }
  } catch (err) {
    toastr.error("Error", err.message);
  }
};
