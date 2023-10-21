import Header from "./Header";
import InputForm from "./InputForm";
import Todos from "./Todos";

function TodoApp() {
  return (
    <div className="app">
      <Header />
      <InputForm />
      <Todos />
    </div>
  );
}

export default TodoApp;
