import { Schema } from "mongoose";

export const MessageSchema = new Schema({
    fullChatId: {
        type: String,
        required: true,
        unique: true
    },
    chatId: {
        type: Schema.Types.ObjectId,
        ref: 'chats',
        required: true,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    message: {
        type: String
    },
    image: {
        type: String
    }
}, { timestamps: true });

