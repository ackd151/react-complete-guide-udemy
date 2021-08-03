import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]);

  const addTodoHandler = (text: string) => {
    setTodos((prevState) => [...prevState, new Todo(text)]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div>
        <NewTodo addTodo={addTodoHandler} />
      </div>
      <div>
        <Todos items={todos} removeTodo={removeTodoHandler} />
      </div>
    </>
  );
}

export default App;
