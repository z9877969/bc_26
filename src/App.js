import { useContext, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import CounterPage from "./components/CounterPage/CounterPage";
import "./App.css";
import { TodoContext } from "./context/TodoProvider";

const App = () => {

 const qwe = useContext(TodoContext);

//  console.log('qwe :>> ', qwe);

  const [activePage, setActivePage] = useState("todo");

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
