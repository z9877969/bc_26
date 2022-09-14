import { Component } from "react";
import s from "./Counter.module.scss";

// let count = 0;
// const pEl = document.querySelector("p");
// const render = () => (pEl.textContent = count);

const initialState = {
  count: 0,
};

class Counter extends Component {
  state = initialState;

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 5 }));

    // DESCRIPTION Fn work
    // this = undefined
    // console.log("this :>> ", this);
    // this.state.count = 0
    // this.setState((qwe) => {
    //   console.log("prevState :>> ", qwe);
    //   return {
    //     count: qwe.count + 2, // 2
    //   };
    // }); // 0 + 2 -> 2
    // this.setState((prevState) => {
    //   console.log("prevState :>> ", prevState);
    //   return { count: prevState.count + 2 }; // 4
    // }); // 0 + 2 -> 2
    // this.setState((prevState) => {
    //   console.log("prevState :>> ", prevState);
    //   return { count: prevState.count + 2 };
    // }); // 0 + 2 -> 2
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 10 }));
  };

  handleReset = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>{this.state.count}</p>
        <div className={s.btnsWrapper}>
          <button
            onClick={this.handleDecrement}
            className={s.btn}
            type="button"
          >
            -
          </button>
          <button onClick={this.handleReset} className={s.btn} type="button">
            0
          </button>
          <button
            onClick={this.handleIncrement}
            className={s.btn}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

// document.addEventListner("click", () => {})
// document.addEventListner("change", () => {})
// document.addEventListner("input", () => {})
// document.addEventListner("scroll", () => {})
