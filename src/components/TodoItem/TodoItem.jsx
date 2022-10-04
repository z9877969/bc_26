import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";
// import { removeTodo } from "../../redux/todo/todoActions";
import { removeTodo } from "../../redux/todo/todoSlice";

const TodoItem = ({ id, date, descr, priority }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <p className={s.descr}>{descr}</p>
      <p className={s.descr}>PRIORIOTY: {priority.toUpperCase()}</p>
      <button className={s.todoBtn} onClick={() => dispatch(removeTodo(id))}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
