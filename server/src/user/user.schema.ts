import { Schema, model } from "mongoose";

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
        }
    },
    { timestamps: true }
);

export const userModel = new model('User', UsersSchema);