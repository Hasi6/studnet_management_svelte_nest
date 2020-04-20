import { gql } from "apollo-boost";

export const getDepartments = gql`
  mutation($facultyId: String!) {
    departments(facultyId: $facultyId) {
      name
      _id
    }
  }
`;
