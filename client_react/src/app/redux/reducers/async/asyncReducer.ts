import { createReducer } from "../util/reducerUtil"
import { AsyncTypes } from '../../types/index.types';



export interface AsyncReducer {
    loading: boolean,
    name: string | null
}

const initialState: AsyncReducer = {
    loading: false,
    name: null
}

const asyncActionStarted = (state: AsyncReducer, payload: any) => {
    console.log('Hasi');
    return {
        ...state,
        loading: true,
        name: payload
    }
}

const asyncActionFinished = (state: AsyncReducer) => {
    return {
        ...state,
        loading: false,
        name: null
    }
}

const asyncActionError = (state: AsyncReducer) => {
    return {
        ...state,
        loading: false,
        name: null
    }
}

export default createReducer(initialState, {
    [AsyncTypes.ASYNC_ACTION_START]: asyncActionStarted,
    [AsyncTypes.ASYNC_ACTION_FINISHED]: asyncActionFinished,
    [AsyncTypes.ASYNC_ACTION_ERROR]: asyncActionError
})