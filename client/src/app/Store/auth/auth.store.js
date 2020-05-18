/* eslint-disable no-console */
import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import errorStore from "../errors/errors.store";
import { endPoint } from "../../../config";
import { navigate } from "svelte-routing";
import decode from "jwt-decode";
import loadingStore from "../loading/loading.store";
import { apiRequests } from "../../helpers/apiRequests";

const tokenDecode = token => {
  let decodedUser;
  let user;
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
  }

  return user;
};

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
    user = tokenDecode(token);

    if (user) {
      errorStore.addErrors({
        msg: `Welcome ${user.username}`,
        type: "success",
        id: uuid()
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
    const res = await apiRequests(`${endPoint}/api/auth/login`, "post", body);
    if (res) {
      await localStorage.setItem("token", res.data.token);
      const token = res.data.token;
      let user = null;

      user = tokenDecode(token);
      // console.log(Date.now().splice(0, 10));
      if (user) {
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
    }
    loadingStore.removeLoading();
    return false;
  };

  // Register User
  const registerUser = async body => {
    const res = await apiRequests(
      `${endPoint}/api/auth/register`,
      "post",
      body
    ); //axios.post(`${endPoint}/api/auth/register`, body);
    if (res && res.status === 201) {
      errorStore.addErrors({
        msg: "Successfully Registered",
        type: "success"
      });
      navigate("/login", { replace: true });
    }
  };

  // Logout User
  const logOutUser = async () => {
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
