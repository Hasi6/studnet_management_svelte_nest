import { gql } from "apollo-boost";

export const getUserChatList = gql`
  mutation($userId: String!) {
    chats(userId: $userId) {
      fullChatId
      lastMessage
      _id
      users {
        username
        _id
        image
        email
        onlineStatus
      }
    }
  }
`;