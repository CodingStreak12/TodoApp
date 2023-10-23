/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import Todo from "./Todo";

function Todos({ allTodos, setAllTodos, deleteTodo, editTodo }) {
  useEffect(() => {
    async function getData() {
      const todos = await axios.get("http://localhost:4000/todo");
      setAllTodos(todos.data.data);
    }
    getData();
  }, [setAllTodos]);
  return (
    <div className="todos">
      {allTodos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
