import clsx from "clsx";
import s from "./TodoForm.module.scss";

const TodoForm = () => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        <span> Date </span>
        <input className={s.input} type="date" name="date" />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input className={s.input} type="text" name="title" />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input className={s.input} type="text" name="descr" />
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
          />
          <label className={clsx(s.label, s.radio)} htmlFor="formRadioLow">
            Low
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioMedium"
            className={s.input}
            type="radio"
            name="priority"
          />
          <label className={clsx(s.label, s.radio)} htmlFor="formRadioMedium">
            Medium
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioHigh"
            className={s.input}
            type="radio"
            name="priority"
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
  );
};

export default TodoForm;
