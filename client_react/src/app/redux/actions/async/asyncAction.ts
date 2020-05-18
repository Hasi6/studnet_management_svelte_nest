import { AsyncTypes } from '../../types/index.types';

export const asyncActionStart = (name: string) => {
    return {
        type: AsyncTypes.ASYNC_ACTION_START,
        payload: name
    }
}
export const asyncActionFinished = () => {
    return {
        type: AsyncTypes.ASYNC_ACTION_FINISHED
    }
}
export const asyncActionError = () => {
    return {
        type: AsyncTypes.ASYNC_ACTION_ERROR
    }
}