import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/counter/counterActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const hello = useSelector((state) => state.b);

  return (
    <>
      <button onClick={() => dispatch(decrementAction(16))}>prev</button>
      <button onClick={() => dispatch(incrementAction(20))}>next</button>
      <h2>Count - {counter}</h2>
      <h1>HomePage - {hello}</h1>
    </>
  );
};

export default HomePage;
