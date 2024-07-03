import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 5,
    max: 70
  },
  phone: {
    type: Number,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  prevAttendance: String
});

export const User = model("User", userSchema);