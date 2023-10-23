/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

function InputForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");
  function handleInput(e) {
    setTodoInput(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/todo", {
        todo: todoInput,
      });
      if (!data.success) {
        throw new Error("Cannot Post Your request");
      }

      addTodo(data.data);
      setTodoInput("");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task today?"
        className="input"
        value={todoInput}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="submit">
        Add Task
      </button>
    </form>
  );
}

export default InputForm;
