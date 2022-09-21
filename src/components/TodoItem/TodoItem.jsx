import { Component } from "react";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { useState } from "react";
import { useEffect } from "react";

const TodoItem = (props) => {
  // state = {
  //   count: 0,
  // };

  // intervalId = null;

  // closeMethode = (e) => {
  //   if (e.code === "Escape") {
  //     console.log("Esc");

  //   }
  // }

  // componentDidMount() {
  //   this.intervalId = setInterval(() => {
  //     console.log("object");
  //     this.setState((prev) => ({ count: prev.count + 1 }));
  //   }, 500);
  //   window.addEventListener("keydown", this.closeMethode);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  //   window.removeEventListener("keydown", this.closeMethode)
  // }

  const {
    id,
    date,
    title,
    descr,
    priority,
    isDoneStatus,
    changeTodoStatus,
    removeTodo,
  } = props;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      console.log("UNMOUNT");
      clearInterval(intervalId);
    };
  }, []);

  // const { count } = this.state;

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
      {<button onClick={(event) => removeTodo(id)} className={s.todoBtn}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>}
    </li>
  );
};

export default TodoItem;
