export const createEvent = `
    mutation($title: String!, $description: String!, $location: {$location: String!, $lat: Float!, $lng: Float!}, dateTime:String!){
        createEvent(createEventInput:{title: $title, description: $description, location: $location, dateTime:$dateTime}){
            title
    user{
      username
    }
        }
    }
`;