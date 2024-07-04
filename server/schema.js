import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: [5, "User must be at least 5 years old"],
    max: [70, "User can not be greater than 70 years old"]
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