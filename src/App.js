import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import CounterPage from "./components/CounterPage/CounterPage";
import "./App.css";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<Navigate to="todo" />} />
      </Routes>
    </>
  );
};

export default App;
