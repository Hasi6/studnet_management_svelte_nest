export const getCommentsQuery = `
query($event: ID!){
  getComments(event: $event){
      _id
    comment
    user{
      _id
      username
      image
      email
    }
  }
}`;
