import { useContext, useMemo } from "react";
import { TodoContext } from "../../context/TodoProvider";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = ({ priorityFilter }) => {
  const { todo } = useContext(TodoContext);

  const filteredTodo = useMemo(() => {
    if (priorityFilter === "all") return todo;
    const filteredTodo = todo.filter((el) => el.priority === priorityFilter);
    return filteredTodo;
  }, [todo, priorityFilter]);

  return (
    <ul className={s.container}>
      {filteredTodo.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          {...todoItem}
          // changeTodoStatus={changeTodoStatus}
          // removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
