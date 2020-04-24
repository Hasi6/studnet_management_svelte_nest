import { toastr } from 'react-redux-toastr';
import { Dispatch } from "redux";
import { AuthTypes } from '../../types/index.types';
import { IAuthUser } from '../../../model/User.model';
import axios, { Method } from 'axios';
import { endPoint } from '../../../config';
import { decodeToken } from '../../../helpers/decodeJwtToken';

const authEndPoint = `${endPoint}/api/auth`


// Set Current User
export const setCurrentUser = () => (dispatch: Dispatch) => {
    const token: string | null = localStorage.getItem('token');
    const authState: { auth: boolean, user: any } = decodeToken(token);
    dispatch({ type: AuthTypes.SET_CURRENT_USER, payload: authState })
}


// Api Requests
const apiRequests = async (method: Method, url: string, data?: any, headers?: any): Promise<any> => {
    try {
        return await axios.request<any>({ url: `${authEndPoint}/${url}`, method, data, headers })
    } catch (err) {
        const errors = err?.response?.data?.message;
        toastr.error("Error", errors)
        return null
    }
}

// Login User
export const loginUser = (user: IAuthUser) => async (dispatch: Dispatch) => {
    const res = await apiRequests("post", "login", user)
    const authState: { auth: boolean, user: any } = decodeToken(res?.data?.token);
    dispatch({ type: AuthTypes.LOGIN_USER });
    dispatch({ type: AuthTypes.SET_CURRENT_USER, payload: authState })

};

// Register User
export const registerUser = (user: IAuthUser) => async (dispatch: Dispatch) => {
    try {
        const { status } = await axios.post<string>(`${authEndPoint}/register`, user);
        dispatch({ type: AuthTypes.REGISTER_USER })
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
};


// Logout User
export const logOutUser = () => async (dispatch: Dispatch) => {
    localStorage.removeItem('token')
    dispatch({
        type: AuthTypes.LOG_OUT_USER
    });
    dispatch({
        type: AuthTypes.SET_CURRENT_USER,
        payload: { user: null, auth: null }
    })
}