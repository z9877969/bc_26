import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import CounterPage from "./components/CounterPage/CounterPage";
import NewsPage from "./components/NewsPage/NewsPage";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("news");

  const handleOpenActivePage = (activePage) => {
    setActivePage(activePage);
  };

  return (
    <>
      <Navigation handleOpenActivePage={handleOpenActivePage} />
      {activePage === "todo" && <TodoPage />}
      {activePage === "counter" && <CounterPage />}
      {activePage === "news" && <NewsPage />}
    </>
  );
};

export default App;
