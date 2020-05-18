/* eslint-disable no-console */
import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

const errorStore = () => {
  // Initial State
  const errors = writable([]);

  const addErrors = (error, time) => {
    const id = uuid();
    const body = { ...error, id };
    errors.update(error => {
      return [...error, body];
    });

    setTimeout(() => {
      errors.update(errors => {
        return errors.filter(error => error.id !== id);
      });
    }, time || 10000);
  };

  const removeErrors = id => {
    errors.update(errs => {
      return errs.filter(error => error.id !== id);
    });
  };

  return {
    subscribe: errors.subscribe,
    addErrors,
    removeErrors
  };
};

export default errorStore();
