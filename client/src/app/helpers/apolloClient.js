import ApolloClient from "apollo-boost";
export const client = new ApolloClient( {
  uri: "http://localhost:5000/graphql",
  headers: {
    authorization: "idToken"
  }
} );