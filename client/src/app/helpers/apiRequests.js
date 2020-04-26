import axios from "axios";
import { v4 as uuid } from "uuid";
import errorStore from "../Store/errors/errors.store";

export const apiRequest = async (url, method, data, headers) => {
  try {
    return await axios.request({ url, method, data, headers });
  } catch (err) {
    const errors = err.response.data.message;
    errorStore.addErrors({ msg: errors, id: uuid(), type: "danger" });
    return null;
  }
};
