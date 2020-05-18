import { Schema } from "mongoose";

export const CommentsSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        event: {
            type: Schema.Types.ObjectId,
            ref: "events",
            required: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);