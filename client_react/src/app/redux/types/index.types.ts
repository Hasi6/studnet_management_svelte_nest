// Auth Types
export enum AuthTypes {
    SET_CURRENT_USER = "SET_CURRENT_USER",
    REGISTER_USER = "REGISTER_USER",
    LOGIN_USER = "LOGIN_USER",
    LOG_OUT_USER = "LOG_OUT_USER",
};

// Async Types
export enum AsyncTypes {
    ASYNC_ACTION_START = "ASYNC_ACTION_START",
    ASYNC_ACTION_FINISHED = "ASYNC_ACTION_FINISHED",
    ASYNC_ACTION_ERROR = "ASYNC_ACTION_ERROR",
};

// Event Types
export enum EventTypes {
    CREATE_EVENT = "CREATE_EVENT",
    GET_EVENTS = "GET_EVENTS",
    DELETE_EVENT = "DELETE_EVENT",
    ADD_PARTICIPANT = "ADD_PARTICIPANT",
    REMOVE_PARTICIPANT = "REMOVE_PARTICIPANT",
}