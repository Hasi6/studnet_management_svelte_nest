import { gql } from "apollo-boost";

export const getFaculties = gql`
  {
    faculties {
      name
      _id
    }
  }
`;
