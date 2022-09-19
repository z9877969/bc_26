import { Component, PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import s from "./TodoForm.module.scss";

const hardCalculateFn = () => {
  let count = 0;
  for (let i = 0; i < 1e9; i += 1) {
    count += 1;
  }
};

class TodoForm extends PureComponent {
  state = {
    date: "2022-09-15",
    title: "",
    descr: "",
    priority: "", // this.props.priorityFilter
  };

  // static getDerivedStateFromProps({ priorityFilter }, state) {
  //   // console.log("newProps :>> ", priorityFilter);
  //   // console.log("state :>> ", state);
  //   // switch (priorityFilter) {
  //   //   case "low":
  //   //     return { date: "2022-09-15" };
  //   //   case "medium":
  //   //     return { date: "2023-09-15" };
  //   //   case "high":
  //   //     return { date: "2024-09-15" };
  //   //   default:
  //   //     return null;
  //   // }
  //   console.log("GET_DERIVED_STATE_FROM_PROPS");
  //   return null;
  // }

  // componentDidMount() {
  //   console.log("CDM");
  // }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("ShCU");
  //   // if (newState.title.length > 5) {
  //   //   return false;
  //   // }
  //   // if (newProps.priorityFilter === "all") return false;
  //   return true;
  // }

  getSnapshotBeforeUpdate() {
    console.log("GSBU");
    return { a: "Hello" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("CDU");
    console.log("snapshot :>> ", snapshot);
    if (prevProps.priorityFilter !== this.props.priorityFilter) {
      this.setState({ priority: this.props.priorityFilter });
    }
    // this.setState({ priority: "all" });
    // hardCalculateFn();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.dir(e.target);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.addTodo({ ...this.state, isDoneStatus: false, id: uuidv4() });
  };

  render() {
    const { date, title, descr, priority } = this.state;

    // const value = hardCalculateFn();
    console.log("RENDER_FORM");

    return (
      <>
        {/* <h1>Form title - {value}</h1> */}
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
      </>
    );
  }
}

export default TodoForm;

// const obj = {
//   key: "654654"
// }

// const b = obj.key; // "654654"
// const objKey = "key"
// const d = obj["key"] // "654654"
// const c = obj[objKey] // -> obj.key = "654654"
