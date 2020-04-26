/* eslint-disable no-console */
import { writable } from "svelte/store";

const chatStore = () => {
  // Initial State
  const chats = writable([]);

  const addChats = newChats => {
    chats.update(oldChats => {
      return [...oldChats, newChats];
    });
  };

  const removeChats = id => {
    chats.update(chat => {
      return chat.filter(ch => ch._id !== id);
    });
  };

  return {
    subscribe: chats.subscribe,
    addChats,
    removeChats
  };
};

export default chatStore();
