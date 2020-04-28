/* eslint-disable no-console */
import { writable } from "svelte/store";

const screenStore = () => {
  // Initial State
  const screen = writable("addChat");

  // Set Loading
  const setScreen = name => {
    screen.update(() => {
      return name;
    });
  };

  return {
    subscribe: screen.subscribe,
    setScreen
  };
};

export default screenStore();
