import ToDoForm from "../TodoForm/TodoForm";
import PriorityFilter from "../PriorityFilter/PriorityFilter";
import ToDoList from "../TodoList/TodoList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../redux/todo/todoOperations";
import { getIsTodoEmpty} from "../../redux/todo/todoSelectors";
import { getLocalId } from "../../redux/auth/authSelectors";

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
