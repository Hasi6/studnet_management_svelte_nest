import { GraphQLClient } from "graphql-request";
import { endPoint } from '../config/index';
import { toastr } from 'react-redux-toastr';

export const graphqlRequest = async (query: any, variables?: any) => {
    const token = await localStorage.getItem('token')

    const client = new GraphQLClient(`${endPoint}/graphql`, {
        headers: { authorization: `Bearer ${token}` }
    });

    try {
        return await client.request(query, variables)
    } catch (err) {
        toastr.error("Error", "err.message")
        return null;
    }

}