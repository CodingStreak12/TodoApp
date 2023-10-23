import { useState } from "react";
import axios from "axios";

/* eslint-disable react/prop-types */
function EditForm({ todo, editTodo, setEdit }) {
  const [editedTodo, setEditedTodo] = useState(todo.todo);
  function handleEdit(e) {
    setEditedTodo(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const updatedTodo = { ...todo, todo: editedTodo };
      const { data } = await axios.patch(
        `http://localhost:4000/todo/${todo._id}`,
        updatedTodo
      );
      if (!data.success) {
        throw new Error("There is problem in updating the todo");
      }
      editTodo(data.data);
      setEdit(false);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="editForm"
    >
      <input
        type="text"
        value={editedTodo}
        onChange={(e) => {
          handleEdit(e);
        }}
        className="editInput"
      />
      <button type="submit" className="editButton">
        Edit
      </button>
    </form>
  );
}

export default EditForm;
