import { GraphQLClient } from "graphql-request";
import { endPoint } from '../config/index';

export const graphqlClient = async () => {
    const token = await localStorage.getItem('token')

    const client = new GraphQLClient(`${endPoint}/graphql`, {
        headers: { authorization: `Bearer ${token}` }
    });
    return client;
}