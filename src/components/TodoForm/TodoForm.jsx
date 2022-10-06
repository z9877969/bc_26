import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../redux/todo/todoOperations";
import { getEditedItem, getTheme } from "../../redux/todo/todoSelectors";
import { changeTheme } from "../../redux/todo/todoSlice";
import { updateTodoApi } from "../../utils/firebaseApi";
import s from "./TodoForm.module.scss";

const TodoForm = () => {
  const dispatch = useDispatch();

  const theme = useSelector(getTheme);
  const editedItem = useSelector(getEditedItem);

  const [form, setForm] = useState({
    date: "",
    descr: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editedItem ? dispatch(editTodo(form)) : dispatch(addTodo(form));
  };

  console.log("TodoForm");

  useEffect(() => {
    editedItem && setForm(editedItem);
    !editedItem &&
      setForm({
        date: "",
        descr: "",
        priority: "",
      });
  }, [editedItem]);

  const { date, descr, priority } = form;

  return (
    <>
      <button type="button" onClick={() => dispatch(changeTheme())}>
        Click
      </button>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            onChange={handleChange}
            className={s.input}
            type="date"
            name="date"
            value={date}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            onChange={handleChange}
            className={s.input}
            type="text"
            name="descr"
            value={descr}
          />
        </label>
        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              onChange={handleChange}
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value="low"
              checked={"low" === priority}
            />
            <label className={clsx(s.label, s.radio)} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              onChange={handleChange}
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value="medium"
              checked={"medium" === priority}
            />
            <label className={clsx(s.label, s.radio)} htmlFor="formRadioMedium">
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              onChange={handleChange}
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value="high"
              checked={"high" === priority}
            />
            <label className={clsx(s.label, s.radio)} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    </>
  );
};

export default TodoForm;
