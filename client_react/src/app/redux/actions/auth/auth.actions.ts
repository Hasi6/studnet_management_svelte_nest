import { toastr } from 'react-redux-toastr';
import { Dispatch } from "redux";
import { AuthTypes } from '../../types/index.types';
import { IAuthUser } from '../../../model/User.model';
import axios from 'axios';
import { endPoint } from '../../../config';
import jwtDecode from 'jwt-decode'

const authEndPoint = `${endPoint}/api/auth`

// Auth Request
const authRequest = async (user: IAuthUser, url: string): Promise<{ token: string } | string | null> => {
    try {
        return await axios.post(`${authEndPoint}/${url}`);
    } catch (err) {
        toastr.error("Error", err.message)
        return null;
    }
}

// Login User
export const loginUser = (user: IAuthUser) => async (dispatch: Dispatch) => {
    try {
        const { data: { token } } = await axios.post<{ token: string }>(`${authEndPoint}/login`, user);
        const authState: { auth: boolean, user: any } = decodeToken(token);
        dispatch({ type: AuthTypes.LOGIN_USER });
        dispatch({ type: AuthTypes.CURRENT_USER, payload: authState })
    } catch (err) {
        toastr.error("Error", err.message)
        return null;
    }
};

// Register User


// Send Verify Link

//  Verify User

// Send Reset Password Link

// Reset Password

// Decode Token
const decodeToken = (token: string) => {
    const decodedToken: any = jwtDecode(token);
    const dateNow = parseInt(Date.now().toString().substr(0, 10));
    let user = null;
    let auth = false;
    if (decodedToken.exp > dateNow) {
        const { username, email, _id, image } = decodedToken;
        localStorage.setItem('token', token);
        user = {
            username,
            email,
            image,
            _id,
            token
        }
        auth = true;
    }
    return { user, auth }
}