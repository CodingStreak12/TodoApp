/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditForm from "./EditForm";
function Todo({ todo, deleteTodo, editTodo }) {
  const [edit, setEdit] = useState(false);
  function handlEdit() {
    setEdit(true);
  }
  async function handleComplete(todo) {
    try {
      const updatedData = { completed: !todo.completed };
      const { data } = await axios.patch(
        `http://localhost:4000/todo/${todo._id}`,
        updatedData
      );
      if (!data.success) {
        throw new Error("There is problem in marking this todo complete");
      }
      editTodo(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDelete(todoId) {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/todo/${todoId}`
      );
      if (!data.success) {
        throw new Error("Can't delete the data there is some problem");
      }
      deleteTodo(todoId);
    } catch (err) {
      console.log(err.message);
    }
  }

  return edit ? (
    <EditForm todo={todo} editTodo={editTodo} setEdit={setEdit} />
  ) : (
    <ul className="todo">
      <li className={`todoItem ${todo.completed ? "completed" : ""}`}>
        <span
          className="todoData"
          onClick={() => {
            handleComplete(todo);
          }}
        >
          {todo.todo}
        </span>

        <div className="todoFunction">
          <FaEdit className="edit" onClick={handlEdit} />
          <AiFillDelete
            className="delete"
            onClick={() => handleDelete(todo._id)}
          />
        </div>
      </li>
    </ul>
  );
}

export default Todo;
