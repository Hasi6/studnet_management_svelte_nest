export const deleteEventById = `
    mutation($id: ID!){
        deleteEventById(id: $id)
    }
`;

export const deleteEventByUserId = `mutation{
    deleteEventByUser
}`;
