export const getEventsQuery = `
    query($page: Int!){
    getEvents(page: $page){
      events{
        _id
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
      image
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
`;
