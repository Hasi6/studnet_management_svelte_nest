/* eslint-disable no-console */
import { writable } from "svelte/store";
import io from "socket.io-client";
const endPoint = "http://localhost:5000";

const socketStore = () => {
  // Initial State
  const socket = writable({
    chatSocket: io.connect(`${endPoint}/chat`)
  });

  // Set Loading
  const setSocket = name => {
    screen.update(() => {
      return name;
    });
  };

  return {
    subscribe: socket.subscribe,
    setSocket
  };
};

export default socketStore();
