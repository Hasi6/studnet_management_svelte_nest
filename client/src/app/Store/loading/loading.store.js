/* eslint-disable no-console */
import { writable } from "svelte/store";

const ladingStore = () => {
  // Initial State
  const loading = writable({
    name: null
  });

  // Set Loading
  const setLoading = name => {
    loading.update(() => {
      return { name };
    });
  };

  // Remove Loading
  const removeLoading = () => {
    loading.update(() => {
      return { name: null };
    });
  };

  return {
    subscribe: loading.subscribe,
    setLoading,
    removeLoading
  };
};

export default ladingStore();
