import mongoose, { Schema, model } from "mongoose";

const todoSchema = Schema({
  todo: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = model("todo", todoSchema);

export default Todo;
