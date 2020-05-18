export const createEvent = `
    mutation($title: String!, $description: String!, $image: String!, $location: String!, $lat: Float!, $lng: Float!, $dateTime:String!){
        createEvent(createEventInput: {title: $title, image:$image, description: $description, location: {location: $location, lat:$lat, lng:$lng}, dateTime:$dateTime}){
            title
        }
    }
`;
export const addParticipantsQuery = `
  mutation($id: ID!){
    addParticipant(id:$id)
  }
`;


export const removeParticipantsQuery = `
  mutation($id: ID!){
    removeParticipant(id:$id)
  }
`;