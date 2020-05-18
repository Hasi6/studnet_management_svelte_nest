import gql from "graphql-tag";

export const commentsSubscriptions = gql`
subscription($name: String!){
    commentAddeds(name:$name){
    event
    user
    comment
  }
}
`;