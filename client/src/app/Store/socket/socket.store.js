/* eslint-disable no-console */
import {
  writable
} from "svelte/store";
import io from "socket.io-client";
const endPoint = "https://hkk19ohi0a.execute-api.us-west-2.amazonaws.com/develop";

const socketStore = () => {
  // Initial State
  const socket = writable( {
    chatSocket: io.connect( `${endPoint}/chat` ),
    newChatSocket: io.connect( `${endPoint}/newChat` )
  } );

  // Set Loading
  const setSocket = name => {
    screen.update( () => {
      return name;
    } );
  };

  return {
    subscribe: socket.subscribe,
    setSocket
  };
};

export default socketStore();