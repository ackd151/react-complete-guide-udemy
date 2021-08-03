import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          removeTodo={props.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
