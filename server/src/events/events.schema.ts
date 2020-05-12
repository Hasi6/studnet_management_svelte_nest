import { Schema } from "mongoose";


const LocationSchema = new Schema({
    location: String,
    lat: Number,
    lng: Number
})



export const EventsSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        participants: {
            type: [Schema.Types.ObjectId],
            default: []
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        dateTime: {
            type: String,
            required: true,
        },
        location: {
            type: LocationSchema,
            required: true,
        },
    },
    { timestamps: true }
);