export const createEvent = `
    mutation($title: String!, $description: String!, $image: String!, $location: String!, $lat: Float!, $lng: Float!, $dateTime:String!){
        createEvent(createEventInput: {title: $title, image:$image, description: $description, location: {location: $location, lat:$lat, lng:$lng}, dateTime:$dateTime}){
            title
        }
    }
`;