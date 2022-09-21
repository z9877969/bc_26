import { useState, useEffect } from "react";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TodoItem = ({
  id,
  date,
  title,
  descr,
  priority,
  isDoneStatus,
  changeTodoStatus,
  removeTodo,
}) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <p>Count: {count}</p>
      <h3 className={s.title}>{title}</h3>
      <p className={s.descr}>{descr}</p>
      <p className={s.descr}>PRIORIOTY: {priority.toUpperCase()}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          checked={isDoneStatus}
          onChange={(event) => changeTodoStatus(id)}
        />
        Done
      </label>
      {
        <button onClick={(event) => removeTodo(id)} className={s.todoBtn}>
          <svg className={s.icon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        </button>
      }
    </li>
  );
};

export default TodoItem;
