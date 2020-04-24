import { toastr } from 'react-redux-toastr';
import { Dispatch } from "redux";
import { AuthTypes } from '../../types/index.types';
import { IAuthUser } from '../../../model/User.model';
import axios from 'axios';
import { endPoint } from '../../../config';
import jwtDecode from 'jwt-decode';

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
export const registerUser = (user: IAuthUser) => async (dispatch: Dispatch) => {
    try {
        const { status } = await axios.post<string>(`${authEndPoint}/register`, user);
        console.log(status)
        dispatch({ type: AuthTypes.LOGIN_USER })
        toastr.success("Registered", "You Have Been Successfully Registered, Please Confirm Your Email Before You Login");
    } catch (err) {
        toastr.error("Error", err.message)
        return null;
    }
};

// Verify User
export const verifyAccount = (token: string) => async (dispatch: Dispatch) => {
    try {
        const { status } = await axios.get<{ sendEmail: boolean }>(`${authEndPoint}/verifyAccount/${token}`);
        if (status === 200) {
            toastr.error("Verified", "You Have Been Successfully Verified Your Account")
        }
    } catch (err) {
        toastr.error("Error", err.message)
        return null;
    }
}


// Request Reset Password Link
export const requestResetPasswordLink = (email: string) => async (dispatch: Dispatch) => {
    try {
        const { status } = await axios.post<{ sendEmail: boolean }>(`${authEndPoint}/resetPasswordLink`, { email });
        if (status === 201) {
            toastr.error("Verified", "You Have Been Successfully Verified Your Account")
        }
    } catch (err) {
        toastr.error("Error", err.message)
        return null;
    }
}

// Reset Password
export const resetPassword = (password: string, token: string) => async (dispatch: Dispatch) => {
    try {
        const { status } = await axios.post<{ sendEmail: boolean }>(`${authEndPoint}/resetPasswordLink`, { password }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (status === 201) {
            toastr.error("Verified", "You Have Been Successfully Verified Your Account")
        }
    } catch (err) {
        toastr.error("Error", err.message)
        return null;
    }
}

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