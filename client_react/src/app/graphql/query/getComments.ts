export const getComments = `
query($event: event!){
  getSingleEvent(event: $event){
    comment
    user{
      _id
      username
      image
      email
    }
  }
}`;
