import ToDoForm from "../TodoForm/TodoForm";
import PriorityFilter from "../PriorityFilter/PriorityFilter";
import ToDoList from "../TodoList/TodoList";
import { useEffect } from "react";
import { getTodoApi } from "../../utils/firebaseApi";
import { useDispatch } from "react-redux";
import { getTodo } from "../../redux/todo/todoOperations";

const TodoPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo()); // (dispatch, getState) => {}
  }, []);
  return (
    <>
      <ToDoForm />
      <PriorityFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
