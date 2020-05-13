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


export const getSingleEventQuery = `
query($id: ID!){
  getSingleEvent(id: $id){
    _id
    title
    participants{
        _id
      }
    user{
      _id
      username
      image
      email
    }
    image
    location{
      lat
      location
      lng
    }
    description
    dateTime
    createdAt
    updatedAt
  }
}`;