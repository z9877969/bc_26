import { useState, useEffect } from "react";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { useRef } from "react";

const TodoItem = ({ id, date, title, descr, priority, isDoneStatus }) => {
  const { removeTodo, changeTodoStatus } = useContext(TodoContext);

  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  }, [count]);

  return (
    <li className={s.toDoItem}>
      <button
        type="button"
        onClick={() => {
          intervalRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 2000);
        }}
      >
        Start Timer
      </button>
      <button
        type="button"
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Finish Timer
      </button>
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
