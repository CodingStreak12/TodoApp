import Header from "./Header";
import InputForm from "./InputForm";
import Todos from "./Todos";
import { useState } from "react";

function TodoApp() {
  const [allTodos, setAllTodos] = useState([]);
  function addTodo(newTodo) {
    setAllTodos([...allTodos, newTodo]);
  }
  function deleteTodo(todoId) {
    const newList = allTodos.filter((todo) => todo._id !== todoId);
    setAllTodos(newList);
  }
  function editTodo(updatedTodo) {
    setAllTodos(
      allTodos.map((todo) =>
        todo._id === updatedTodo._id ? updatedTodo : todo
      )
    );
  }
  return (
    <div className="app">
      <Header />
      <InputForm addTodo={addTodo} />
      <Todos
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoApp;
