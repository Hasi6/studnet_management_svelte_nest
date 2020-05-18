import gql from "graphql-tag";

export const commentsSubscriptions = gql`
subscription($id: String!){
    newCommentAdded(id:$id){
      user{
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