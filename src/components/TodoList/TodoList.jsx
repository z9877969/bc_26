import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const getFilteredTodo = (state) => {
  const { items, filter } = state.todo;
  if (filter === "all") return items;
  return items.filter((el) => el.priority === filter);
};

const TodoList = () => {
  const todo = useSelector(getFilteredTodo);

  return (
    <ul className={s.container}>
      {todo.map((todoItem) => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
