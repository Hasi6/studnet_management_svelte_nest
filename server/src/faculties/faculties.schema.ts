import { Schema } from "mongoose";

export const FacultySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

