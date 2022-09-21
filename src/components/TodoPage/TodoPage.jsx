import { useState, useEffect } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import s from "./TodoPage.module.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoPage = () => {
  const [todo, setTodo] = useLocalStorage("todo", todoList);
  const [priorityFilter, setPriorityFilter] = useState("all");

  const addTodo = (newTodo) => {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const filterTodo = () => {
    if (priorityFilter === "all") return todo;
    const filteredTodo = todo.filter((el) => el.priority === priorityFilter);
    return filteredTodo;
  };

  const changeTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      ),
    }));
  };

  useEffect(() => {
    console.log(priorityFilter);
  }, [priorityFilter]);

  const filteredTodo = filterTodo();
  return (
    <>
      <ToDoForm addTodo={addTodo} priorityFilter={priorityFilter} />
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
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  );
};

export default TodoPage;
