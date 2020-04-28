/* eslint-disable no-console */
import { writable } from "svelte/store";
// import { apiRequests } from "../../helpers/apiRequests";
// import { endPoint } from "../../../config";

const chatStore = () => {
  // Initial State
  const chats = writable([]);

  const addChats = newChats => {
    chats.update(() => {
      return newChats;
    });
  };

  const updateChat = updatedChats => {
    chats.update(() => {
      return updatedChats;
    });
  };

  const addNewChat = newChat => {
    chats.update(chats => {
      return [newChat, ...chats];
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
    updateChat,
    addNewChat,
    removeChats
  };
};

export default chatStore();
