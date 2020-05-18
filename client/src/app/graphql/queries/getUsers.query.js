import { gql } from "apollo-boost";

export const getUsers = gql`
  query($searchKey: String!) {
    searchUser(searchKey: $searchKey) {
      username
      image
      email
      _id
    }
  }
`;
