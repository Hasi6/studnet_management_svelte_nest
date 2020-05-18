/* eslint-disable no-console */
import { writable } from "svelte/store";

const chatIdStore = () => {
  // Initial State
  const chats = writable(null);

  const addChatId = chatId => {
    chats.update(() => {
      return chatId;
    });
  };

  return {
    subscribe: chats.subscribe,
    addChatId
  };
};

export default chatIdStore();
