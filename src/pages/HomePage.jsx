import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/counter/counterActions";
import { changeTitle } from "../redux/hello/helloActions";

const MainTitle = ({title}) => <h1>HomePage - {title}</h1>

const HomePage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const helloTitle = useSelector((state) => state.hello.title);
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeTitle(input))
  }

  return (
    <>
      <button onClick={() => dispatch(decrementAction(16))}>prev</button>
      <button onClick={() => dispatch(incrementAction(20))}>next</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Change title</button>
      </form>
      <h2>Count - {counter}</h2>
      <MainTitle title={input}/>
      <h2>{helloTitle}</h2>
    </>
  );
};

export default HomePage;
