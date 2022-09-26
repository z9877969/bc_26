import { useState } from "react";
import PriorityFilter from "../components/PriorityFilter/PriorityFilter";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";

const TodoPage = () => {
  const [priorityFilter, setPriorityFilter] = useState("all");

  const handleFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  return (
    <>
      <ToDoForm priorityFilter={priorityFilter} />
      <PriorityFilter
        handleFilterChange={handleFilterChange}
        value={priorityFilter}
      />
      <ToDoList priorityFilter={priorityFilter} />
    </>
  );
};

export default TodoPage;
