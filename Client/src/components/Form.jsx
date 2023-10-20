import { useState } from "react";

function Form() {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    setTodo("");
  }
  function handleInput(e) {
    setTodo(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo"
        className="input"
        value={todo}
        onChange={handleInput}
      />
    </form>
  );
}

export default Form;
