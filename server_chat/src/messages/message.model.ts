export interface IMessage {
    _id: string;
    message?: string
    image?: string
    chatId: string
    fullChatId: string
    createdAt: string
    updatedAt: string
    sender: string
}