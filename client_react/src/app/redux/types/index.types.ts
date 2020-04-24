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