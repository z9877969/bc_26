import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetTodoQuery } from "../../redux/todo/todoApi";
import { getFilter } from "../../redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const filter = useSelector(getFilter);

  const { data: todo = [], isLoading, error } = useGetTodoQuery();

  const getFilteredTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority !== filter);
  };

  useEffect(() => {
    error && alert("Error");
  }, [error]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={s.container}>
        {getFilteredTodo().map((todoItem) => (
          <TodoItem key={todoItem.id} {...todoItem} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
