export const addCommentMutation = `
  mutation($event: ID!, $comment: String!){
    addComment(input:{event:$event, comment: $comment}){
        user{
      username
      email
      image
      _id
    }
    comment
    _id
    }
  }
`;

export const deleteCommentMutation = `
  mutation($id: ID!, $event: ID!){
    deleteComment(id: $id, event: $event)
  }
`;
