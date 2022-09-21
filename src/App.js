import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import CounterPage from "./components/CounterPage/CounterPage";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const handleOpenActivePage = (activePage) => {
    setActivePage(activePage);
  };

  return (
    <>
      <Navigation handleOpenActivePage={handleOpenActivePage} />
      {activePage === "todo" && <TodoPage />}
      {activePage === "counter" && <CounterPage />}
      {activePage === "home" && <h1>Welcome to our amazing app!!!</h1>}
    </>
  );
};

export default App;
