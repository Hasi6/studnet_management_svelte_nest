import { Schema } from "mongoose";

export const CommentsSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: "posts",
            required: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);