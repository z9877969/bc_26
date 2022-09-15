import s from "./TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TodoList = ({ todo, removeTodo, changeTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ title, descr, id, date, isDoneStatus }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
          <h3 className={s.title}>{title}</h3>
          <p className={s.descr}>{descr}</p>
          <label className={s.status}>
            <input
              type="checkbox"
              name="status"
              checked={isDoneStatus}
              onChange={(event) => changeTodoStatus(id)}
            />
            Done
          </label>
          <button onClick={(event) => removeTodo(id)} className={s.todoBtn}>
            <svg className={s.icon}>
              <use href={sprite + "#icon-trash"}></use>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
