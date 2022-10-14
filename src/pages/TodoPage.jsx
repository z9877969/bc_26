import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoForm from "../components/TodoForm/TodoForm";
import PriorityFilter from "../components/PriorityFilter/PriorityFilter";
import ToDoList from "../components/TodoList/TodoList";
import { getTodo } from "../redux/todo/todoOperations";
import { getIsTodoEmpty} from "../redux/todo/todoSelectors";
import { getLocalId } from "../redux/auth/authSelectors";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoEmpty = useSelector(getIsTodoEmpty);
  const localId = useSelector(getLocalId);

  useEffect(() => {
    localId && isTodoEmpty && dispatch(getTodo());
  }, [dispatch, localId, isTodoEmpty]);

  return (
    <>
      <ToDoForm />
      <PriorityFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
