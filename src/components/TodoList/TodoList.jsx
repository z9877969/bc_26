import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = ({ todo, removeTodo, changeTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          {...todoItem}
          changeTodoStatus={changeTodoStatus}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
