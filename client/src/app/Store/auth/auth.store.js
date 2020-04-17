/* eslint-disable no-console */
import { writable } from "svelte/store";
import axios from "axios";
import errorStore from "../errors/errors.store";
import { endPoint } from "../../../config";
import { navigate } from "svelte-routing";

const authStore = () => {
  // Initial State
  const authenticate = writable({
    auth: null,
    user: null
  });

  // Check Auth State
  const checkAuthState = async () => {
    const token = await localStorage.getItem("token");
    authenticate.update(() => {
      return {
        auth: token ? true : false,
        user: null
      };
    });
  };

  // Login User
  const loginUser = async body => {
    try {
      const res = await axios.post(`${endPoint}/api/auth/login`, body);
      console.log(res);
      await localStorage.setItem("token", res.data.token);
      authenticate.update(() => {
        return { auth: true, user: null };
      });
    } catch (err) {
      const errors = err.response.data;
      console.log(errors.message);
      errorStore.addErrors({ msg: errors.message, type: "danger" });

      console.error(err.message);
    }
  };

  // Register User
  const registerUser = async body => {
    try {
      const { status } = await axios.post(
        `${endPoint}/api/auth/register`,
        body
      );
      if (status === 201) {
        navigate("/login", { replace: true });
      }
    } catch (err) {
      const errors = err.response.data;
      console.log(errors.message);
      errorStore.addErrors({ msg: errors.message, type: "danger" });
    }
  };

  // Logout User
  const logOutUser = async () => {
    console.log("Test");
    await localStorage.removeItem("token");
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
    registerUser,
    logOutUser
  };
};

export default authStore();
