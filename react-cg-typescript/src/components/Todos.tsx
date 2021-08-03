import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item: Todo) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default Todos;
