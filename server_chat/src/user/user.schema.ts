import { Schema } from "mongoose";

export const UsersSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        faculty: {
            type: String,
        },
        department: {
            type: String,
        },
        image: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String
        },
        verifyAccount: {
            type: Boolean,
            default: true
        },
        chatIdList: {
            type: [Schema.Types.ObjectId],
            default: [],
            ref: "chatList"
        },
        onlineStatus: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);