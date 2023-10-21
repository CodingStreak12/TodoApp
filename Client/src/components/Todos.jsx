import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    async function getData() {
      const todos = await axios.get("http://localhost:4000/todo");
      setAllTodos(todos.data.data);
    }
    getData();
  }, []);
  return (
    <div className="todos">
      {allTodos.map((todo) => (
        <h1 key={todo.todo}>{todo.todo}</h1>
      ))}
    </div>
  );
}

export default Todos;
