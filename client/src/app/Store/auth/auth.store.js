/* eslint-disable no-console */
import { writable } from "svelte/store";
import axios from "axios";
import errorStore from "../errors/errors.store";
import { endPoint } from "../../../config";
import { navigate } from "svelte-routing";
import decode from "jwt-decode";
import loadingStore from "../loading/loading.store";

const authStore = () => {
  // Initial State
  const authenticate = writable({
    auth: null,
    user: null
  });

  // Check Auth State
  const checkAuthState = async () => {
    const token = await localStorage.getItem("token");
    let user = null;
    let decodedUser;
    if (token) {
      decodedUser = decode(token);
    }
    // console.log(Date.now().splice(0, 10));
    const newDate = Date.now();
    if (
      decodedUser &&
      parseInt(newDate.toString().substr(0, 10)) < decodedUser.exp
    ) {
      user = decodedUser;
      errorStore.addErrors({
        msg: `Welcome ${user.username}`,
        type: "success"
      });
    }
    authenticate.update(() => {
      return {
        auth: token ? true : false,
        user: user
      };
    });
  };

  // Login User
  const loginUser = async body => {
    try {
      const res = await axios.post(`${endPoint}/api/auth/login`, body);
      await localStorage.setItem("token", res.data.token);
      const token = res.data.token;
      let user = null;
      let decodedUser;
      if (token) {
        decodedUser = decode(token);
      }
      // console.log(Date.now().splice(0, 10));
      const newDate = Date.now();
      if (
        decodedUser &&
        parseInt(newDate.toString().substr(0, 10)) < decodedUser.exp
      ) {
        user = decodedUser;
        errorStore.addErrors({
          msg: `Welcome ${user.username}`,
          type: "success"
        });
      }
      authenticate.update(() => {
        return { auth: true, user };
      });
      loadingStore.removeLoading();
      return true;
    } catch (err) {
      const errors = err.response.data;
      console.log(errors.message);
      errorStore.addErrors({ msg: errors.message, type: "danger" });
      console.error(err.message);
      loadingStore.removeLoading();
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
        errorStore.addErrors({
          msg: "Successfully Registered",
          type: "success"
        });
        navigate("/login", { replace: true });
      }
    } catch (err) {
      const errors = err.response.data;
      let newErrors;
      try {
        newErrors = errors.message.splice(",");
      } catch (err) {
        newErrors = [errors.message];
      }
      if (newErrors.length > 0) {
        newErrors.map(error => {
          errorStore.addErrors({ msg: error, type: "danger" });
        });
        return;
      }
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
