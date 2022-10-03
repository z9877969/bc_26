import ToDoForm from "../TodoForm/TodoForm";
import PriorityFilter from '../PriorityFilter/PriorityFilter';
import ToDoList from "../TodoList/TodoList";

const TodoPage = () => {

  return (
    <>
      <ToDoForm />
      <PriorityFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
