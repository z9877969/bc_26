import { useState, useEffect, useContext } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import s from "./TodoPage.module.scss";

const TodoPage = () => {
  const [priorityFilter, setPriorityFilter] = useState("all");

  const handleFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  // useEffect(() => {
  //   console.log(priorityFilter);
  // }, [priorityFilter]);
  return (
    <>
      <ToDoForm priorityFilter={priorityFilter} />
      <div className={s.priorityFilter}>
        <p className={s.title}>Priority filter:</p>
        <select
          className={s.select}
          name="priorityFilter"
          value={priorityFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <ToDoList priorityFilter={priorityFilter} />
    </>
  );
};

export default TodoPage;
