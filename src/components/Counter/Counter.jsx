import { useDispatch, useSelector } from "react-redux";
import { actionDecrement, actionIncrement, actionReset } from "../../redux/counter/counterActions";
import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });

  // console.log("dispatch :>> ", dispatch);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => {
            dispatch(actionDecrement());
          }}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button onClick={() => dispatch(actionReset())} className={s.btn} type="button">
          0
        </button>
        <button
          onClick={() => dispatch(actionIncrement(50))}
          className={s.btn}
          type="button"
        >
          50
        </button>
      </div>
    </div>
  );
};

export default Counter;
