import axios from "axios";
import { v4 as uuid } from "uuid";
import errorStore from "../Store/errors/errors.store";

export const apiRequests = async (url, method, data, headers) => {
  try {
    return await axios.request({ url, method, data, headers });
  } catch (err) {
    const errors = err.response.data;
    let newErrors;
    try {
      newErrors = errors.message.splice(",");
    } catch (err) {
      newErrors = [errors.message];
      return null;
    }
    if (newErrors.length > 0) {
      newErrors.map(error => {
        errorStore.addErrors({ msg: error, type: "danger", id: uuid() });
      });
      return null;
    }
    errorStore.addErrors({ msg: errors.message, type: "danger", id: uuid() });
    return null;
  }
};
