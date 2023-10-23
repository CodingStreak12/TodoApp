import Todo from "../models/todoModel.js";

/* This is very bad practice to generate this type of ids. Did it for just learning Purpose */

export async function getAllTodos(req, res) {
  try {
    const allTodos = await Todo.find({});
    if (!allTodos) {
      throw new Error("Data doesn't exist in the database");
    }
    res.status(200).json({ success: true, data: allTodos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function createTodo(req, res) {
  const todo = req.body;
  try {
    const newTodo = await Todo.create(todo);
    res.status(201).json({ success: true, data: newTodo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function updateTodo(req, res) {
  const updatedTodo = req.body;
  const { id: todoId } = req.params;
  try {
    const updatedNewTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      updatedTodo,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      success: true,
      data: updatedNewTodo,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function deleteTodo(req, res) {
  const { id: todoId } = req.params;
  try {
    const response = await Todo.findOneAndDelete({ _id: todoId });
    if (!response) {
      throw new Error(`${todoId} Todo Id doesn't exist in the database`);
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function getSingleTodo(req, res) {
  const { id: todoId } = req.params;
  try {
    const todo = await Todo.findOne({ _id: todoId });
    if (!todo)
      throw new Error(`${todoId} Todo Id doesn't exist in the database`);
    res.status(200).json({ success: true, data: todo });
  } catch (err) {
    res.status(200).json({ success: false, message: err.message });
  }
}
