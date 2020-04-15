import { writable } from "svelte/store";

export const authStore = writable({
  auth: null,
  user: null
});
