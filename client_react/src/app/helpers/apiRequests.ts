import axios, { Method } from 'axios';
import { toastr } from 'react-redux-toastr';



// Api Requests
export const apiRequests = async (method: Method, url: string, data?: any, headers?: any): Promise<any> => {
    try {
        return await axios.request<any>({ url, method, data, headers })
    } catch (err) {
        const errors = err?.response?.data?.message;
        toastr.error("Error", errors)
        return null
    }
}