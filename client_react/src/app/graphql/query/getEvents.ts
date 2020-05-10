export const getEvents = `{
    query($page: Int!){
    getEvents(page: $page){
      events{
      title
      location{
        location
        lat
        lng
      }
      user{
        _id
        username
        image
        email
      }
      description
      dateTime
      createdAt
      updatedAt
    }
    all
    pages
    page
    }
  }
}`;
