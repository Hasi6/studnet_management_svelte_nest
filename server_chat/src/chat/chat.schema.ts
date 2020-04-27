import { Schema } from "mongoose";

export const ChatSchema = new Schema({
    fullChatId: {
        type: String,
        required: true,
        unique: true
    },
    userIds: {
        type: [Schema.Types.ObjectId],
        ref: 'users',
        required: true,
    },
    groupName: {
        type: String
    }
}, { timestamps: true });

