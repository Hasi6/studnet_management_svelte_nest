import { gql } from "apollo-boost";

export const getMessages = gql`
  query($chatId: String!) {
    messages(chatId: $chatId) {
      sender
      message
      _id
      fullChatId
      chatId
    }
  }
`;
