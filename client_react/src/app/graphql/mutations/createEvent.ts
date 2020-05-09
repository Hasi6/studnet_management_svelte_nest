export const createEvent = `
    mutation($title: String!, $description: String!, $location: String!, $lat: Float!, $lng: Float!, $dateTime:String!){
        createEvent(createEventInput: {title: $title, description: $description, location: {location: $location, lat:$lat, lng:$lng}, dateTime:$dateTime}){
            title
        }
    }
`;