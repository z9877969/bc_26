import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import s from "./TodoForm.module.scss";
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// const hardCalculateFn = () => {
//   let count = 0;
//   for (let i = 0; i < 1e9; i += 1) {
//     count += 1;
//   }
// };

const TodoForm = ({ addTodo }) => {
  // state = {
  //   date: "2022-09-15",
  //   title: "",
  //   descr: "",
  //   priority: "", // this.props.priorityFilter
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.priorityFilter !== this.props.priorityFilter) {
  //     this.setState({ priority: this.props.priorityFilter });
  //   }
  // }
  // form without object
  // const [date, setDate] = useState("2022-09-15");
  // const [title, setTitle] = useState("");
  // const [descr, setDescr] = useState("");
  // const [priority, setPriority] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // this.setState({ [name]: value });
  //   switch (name) {
  //     case "date":
  //       setDate(value);
  //       break;
  //     case "title":
  //       setTitle(value);
  //       break;
  //     case "descr":
  //       setDescr(value);
  //       break;
  //     case "priority":
  //       setPriority(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // form with object
  // const [form, setForm] = useState({
  //   date: "2022-09-15",
  //   title: "",
  //   descr: "",
  //   priority: "",
  // });
  const [form, setForm] = useLocalStorage("form", {
    date: "2022-09-15",
    title: "",
    descr: "",
    priority: "",
  });

  const [isBtnShow, setIsBtnShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      ...form,
      isDoneStatus: false,
      id: uuidv4(),
    });
  };

  const { date, title, descr, priority } = form;
  // const value = hardCalculateFn();

  useEffect(() => {
    if (Object.values(form).every((el) => !!el)) {
      setIsBtnShow(true);
    }
  }, [form]);

  return (
    <>
      {isBtnShow && <button>Click</button>}
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            type="date"
            value={date}
            name="date"
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            value={title}
            type="text"
            name="title"
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={descr}
            onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
