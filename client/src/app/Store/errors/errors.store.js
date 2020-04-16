/* eslint-disable no-console */
import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

const errorStore = () => {
  // Initial State
  const errors = writable([
    {
      msg: "Test",
      type: "danger"
    },
    {
      msg: "Test",
      type: "danger"
    }
  ]);

  const addErrors = error => {
    const body = { ...error, id: uuid() };
    errors.update(error => {
      return [...error, body];
    });
  };

  return {
    subscribe: errors.subscribe,
    addErrors
  };
};

export default errorStore();
