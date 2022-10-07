import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddTodoMutation,
  useUpdateTodoMutation,
} from "../../redux/todo/todoApi";
import { getEditedItem } from "../../redux/todo/todoSelectors";
import { setEditedItem } from "../../redux/todo/todoSlice";
import s from "./TodoForm.module.scss";

const iS = {
  date: "",
  descr: "",
  priority: "",
};

const TodoForm = () => {
  const dispatch = useDispatch();

  const [addTodo, { isLoading, error }] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const editedItem = useSelector(getEditedItem);

  const [form, setForm] = useState(iS);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { id, ...data } = form;
    editedItem ? updateTodo({ id, data }) : addTodo(form);
    editedItem && dispatch(setEditedItem(null));
  };

  useEffect(() => {
    editedItem && setForm(editedItem);
    !editedItem && setForm(iS);
  }, [editedItem]);

  const { date, descr, priority } = form;

  return (
    <>
      {error && <p>{error.error}</p>}
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
          {isLoading ? "Loading..." : "Ok"}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
