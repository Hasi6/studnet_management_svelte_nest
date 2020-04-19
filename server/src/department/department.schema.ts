import { Schema } from "mongoose";

export const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    facultyId: {
        type: String,
        ref: 'faculties',
        required: true,
    }
}, { timestamps: true });

