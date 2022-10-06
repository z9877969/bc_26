import ToDoForm from "../TodoForm/TodoForm";
import PriorityFilter from "../PriorityFilter/PriorityFilter";
import ToDoList from "../TodoList/TodoList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../redux/todo/todoOperations";
import { getIsTodoEmpty, getTodoItems } from "../../redux/todo/todoSelectors";
// import { useRef } from "react";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoEmpty = useSelector(getIsTodoEmpty);

  // const isFirstRenderRef = useRef(true);

  useEffect(() => {
    isTodoEmpty && dispatch(getTodo());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isFirstRenderRef.current) {
  //     isFirstRenderRef.current = false;
  //     return;
  //   }
  //   !todo.length && alert("Empty");
  // }, [todo]);

  console.log("TodoPage");

  return (
    <>
      <ToDoForm />
      <PriorityFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
