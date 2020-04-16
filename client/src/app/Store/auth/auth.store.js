/* eslint-disable no-console */
import { writable } from "svelte/store";
import axios from "axios";
import { endPoint } from "../../../config";

const authStore = () => {
  // Initial State
  const authenticate = writable({
    auth: null,
    user: null
  });

  // Check Auth State
  const checkAuthState = async () => {
    const token = await localStorage.getItem("token");
    console.log(token);
    authenticate.update(() => {
      console.log("Hasi");
      return {
        auth: token ? true : false,
        user: null
      };
    });
  };

  // Login User
  const loginUser = async body => {
    try {
      const { data } = await axios.post(`${endPoint}/api/auth/login`, body);
      await localStorage.setItem("token", data.token);
      authenticate.update(() => {
        return { auth: true, user: null };
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Register User

  // Logout User
  const logOutUser = async () => {
    localStorage.removeItem("token");
    authenticate.update(() => {
      return {
        auth: false,
        user: null
      };
    });
  };

  return {
    subscribe: authenticate.subscribe,
    checkAuthState,
    loginUser,
    logOutUser
  };
};

export default authStore;
