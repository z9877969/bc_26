import { useState } from "react";
import s from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => prev - 5);
  };

  const increment = () => {
    setCount((prev) => {
      return prev + 10;
    });
  };

  const reset = () => setCount(0);

  console.log(count);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button onClick={decrement} className={s.btn} type="button">
          -
        </button>
        <button onClick={reset} className={s.btn} type="button">
          0
        </button>
        <button onClick={increment} className={s.btn} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
