import gql from "graphql-tag";

export const commentsSubscriptions = gql`
  subscription($id: String!) {
    newCommentAdded(id: $id) {
      user {
        _id
        image
        email
        username
      }
      _id
      comment
    }
  }
`;

export const deleteCommentSubscription = gql`
  subscription($id: String!) {
    deleteCommentSubscription(id: $id)
  }
`;
