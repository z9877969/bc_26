import { useDispatch } from "react-redux";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { setEditedItem } from "../../redux/todo/todoSlice";
import { useRemoveTodoMutation } from "../../redux/todo/todoApi";

const TodoItem = ({ id, date, descr, priority }) => {
  const dispatch = useDispatch();

  const [removeTodo, { isLoading }] = useRemoveTodoMutation();

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <p className={s.descr}>{descr}</p>
      <p className={s.descr}>PRIORIOTY: {priority.toUpperCase()}</p>
      <button className={s.todoBtn} onClick={() => removeTodo(id)}>
        {isLoading ? (
          <span>L...</span>
        ) : (
          <svg className={s.icon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        )}
      </button>
      <button
        className={s.todoBtn}
        onClick={() => dispatch(setEditedItem({ id, date, descr, priority }))}
      >
        <svg className={s.icon}>
          <use href={sprite + "#icon-edit-pencil"}></use>
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
