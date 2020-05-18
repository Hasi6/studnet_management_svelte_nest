import io from 'socket.io-client';
import { endPoint } from "../../config";


export default (state: any, { type }: { type: any, payload: any }) => {
  switch (type) {
    case "ADD_USER_ID":
      return io.connect(`${endPoint}/posts`);
    default:
      return io.connect(`${endPoint}/posts`);
  }
};
