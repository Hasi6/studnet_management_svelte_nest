import { ApolloClient } from "apollo-boost";
import { readable } from "svelte/store";

export const apolloClient = readable(0, set => {
  const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });
  set(client);
  return client;
});
