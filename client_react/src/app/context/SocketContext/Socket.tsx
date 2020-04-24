import React, { createContext, useReducer, Context, FC } from "react";
import io from "socket.io-client";
import { endPoint } from "../../config";
import socketReducer from "./Socket.reducer";

let socket = io.connect(`${endPoint}/posts`);

const initialState = socket;

export const SocketContext: Context<any> = createContext(initialState);

interface propTypes {
  children: FC;
}

const SocketProvider: FC<propTypes> = ({ children }) => {
  const [state, dispatch] = useReducer(socketReducer, initialState);

  const addUser = (user: any) => {
    dispatch({
      type: "ADD_USER_ID",
      payload: { user }
    });
  };
  return (
    <SocketContext.Provider value={{ addUser, socket: state }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
