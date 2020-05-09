import { createEvent } from '../../../graphql/mutations/createEvent';
import { graphqlRequest } from '../../../graphql/index.graphql';
// import { EventTypes } from '../../types/index.types';niya
import { Dispatch } from 'redux';
import { toastr } from 'react-redux-toastr';


// Create Events
export const createEvents = (variables: any) => async (dispatch: Dispatch) => {
    try {
        const res = await graphqlRequest(createEvent, variables);
        console.log(res)
    } catch (err) {
        toastr.error("Error", err.message);
    }
}