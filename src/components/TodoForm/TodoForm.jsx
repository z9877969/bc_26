import { Component } from "react";
import { FormStyled } from "./TodoForm.styled";
import { Formik, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import s from "./TodoForm.module.scss";
const initialState = {
  date: "2022-09-15",
  title: "",
  descr: "",
  priority: "low",
};

const TodoForm = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{
        date: "2022-09-15",
        // title: "",
        // descr: "",
        priority: "low",
      }}
      onSubmit={(values, actions) => {
        addTodo({
          ...values,
          isDoneStatus: false,
          id: uuidv4(),
        });
        actions.resetForm();
      }}
    >
      {(props) => (
        <FormStyled className={s.form}>
          <label className={s.label}>
            <span> Date </span>
            <input
              className={s.input}
              type="date"
              value={props.values.date}
              name="date"
              onChange={props.handleChange}
            />
          </label>
          <label className={s.label}>
            <span> Title </span>
            <input
              className={s.input}
              value={props.values.title}
              type="text"
              name="title"
              onChange={props.handleChange}
            />
          </label>
          <label className={s.label}>
            <span> Description </span>
            <input
              className={s.input}
              type="text"
              name="descr"
              value={props.values.descr}
              onChange={props.handleChange}
            />
          </label>

          <div className={s.labelWrapper}>
            <div className={s.radioWrapper}>
              <input
                id="formRadioLow"
                className={s.input}
                type="radio"
                name="priority"
                value="low"
                checked={props.values.priority === "low"}
                onChange={props.handleChange}
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
                value="medium"
                checked={props.values.priority === "medium"}
                onChange={props.handleChange}
              />
              <label
                className={clsx(s.label, s.radio)}
                htmlFor="formRadioMedium"
              >
                Medium
              </label>
            </div>
            <div className={s.radioWrapper}>
              <input
                id="formRadioHigh"
                className={s.input}
                type="radio"
                name="priority"
                value="high"
                checked={props.values.priority === "high"}
                onChange={props.handleChange}
              />
              <label className={clsx(s.label, s.radio)} htmlFor="formRadioHigh">
                High
              </label>
            </div>
          </div>
          <button className={s.submit} type="submit">
            Ok
          </button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default TodoForm;

{
  /* <>
  <form className={s.form} onSubmit={this.handleSubmit}>
    <label className={s.label}>
      <span> Date </span>
      <input
        className={s.input}
        type="date"
        value={date}
        name="date"
        onChange={this.handleChange}
      />
    </label>
    <label className={s.label}>
      <span> Title </span>
      <input
        className={s.input}
        value={title}
        type="text"
        name="title"
        onChange={this.handleChange}
      />
    </label>
    <label className={s.label}>
      <span> Description </span>
      <input
        className={s.input}
        type="text"
        name="descr"
        value={descr}
        onChange={this.handleChange}
      />
    </label>

    <div className={s.labelWrapper}>
      <div className={s.radioWrapper}>
        <input
          id="formRadioLow"
          className={s.input}
          type="radio"
          name="priority"
          value="low"
          checked={priority === "low"}
          onChange={this.handleChange}
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
          value="medium"
          checked={priority === "medium"}
          onChange={this.handleChange}
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
          value="high"
          checked={priority === "high"}
          onChange={this.handleChange}
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
</>; */
}
