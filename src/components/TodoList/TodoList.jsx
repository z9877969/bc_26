import { useCallback } from "react";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../context/ThemProvider";
import { TodoContext } from "../../context/TodoProvider";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = ({ priorityFilter }) => {
  const { todo } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  // const filterTodo = () => {
  //   console.log("filterTodo start");
  //   if (priorityFilter === "all") return todo;
  //   const filteredTodo = todo.filter((el) => el.priority === priorityFilter);
  //   return filteredTodo;
  // };

  const filteredTodo = useMemo(() => {
    console.log("filterTodo start");
    if (priorityFilter === "all") return todo;
    const filteredTodo = todo.filter((el) => el.priority === priorityFilter);
    return filteredTodo;
  }, [todo, priorityFilter]);

  // const value = useMemo(() => {
  //   return {
  //     a: 21,
  //     b: 65,
  //   };
  // }, []);

  // const filteredTodo = filterTodo();
  const someCb = useCallback(() => {
    return theme;
  }, [theme]);

  console.log("TodoLis - ", theme);

  return (
    <ul className={s.container}>
      {filteredTodo.map((todoItem) => (
        <TodoItem
          cb={someCb}
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
