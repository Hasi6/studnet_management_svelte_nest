export const getCommentsQuery = `
query($event: ID!){
  getComments(event: $event){
    comment
    user{
      _id
      username
      image
      email
    }
  }
}`;
