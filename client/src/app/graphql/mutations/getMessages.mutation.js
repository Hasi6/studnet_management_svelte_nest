import { gql } from "apollo-boost";

export const getMessages = gql`
  mutation($chatId: String!) {
    messages(chatId: $chatId) {
      sender
      message
      image
      _id
      fullChatId
      chatId
    }
  }
`;
