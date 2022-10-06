import { useSelector } from "react-redux";
import { getFilteredTodo } from "../../redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const filteredTodo = useSelector(getFilteredTodo);

  console.log("TodoList");

  return (
    <ul className={s.container}>
      {filteredTodo.map((todoItem) => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
