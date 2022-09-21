import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import CounterPage from "./components/CounterPage/CounterPage";
import "./App.css";
import MenuList from "./components/Test/Test";

const App = () => {
  // state = {
  //   activePage: "counter",
  //   a: 0,
  // };
  const [activePage, setActivePage] = useState("home");

  const handleOpenActivePage = (activePage) => {
    // this.setState({ activePage: activePage });
    setActivePage(activePage);
  };

  return (
    <>
      <Navigation handleOpenActivePage={handleOpenActivePage} />
      {activePage === "todo" && <TodoPage />}
      {activePage === "counter" && <CounterPage />}
      {/* {activePage === "home" && <h1>Welcome to our amazing app!!!</h1>} */}
      {activePage === "home" && <MenuList />}
    </>
  );
};

export default App;

// const arr = [1,2,3]

// const [firstEl, secondEl, thirdEl] = arr

// const useForm = () => {
//   useState()
// }

// const Comp = () => {

//   const fn = () => {

//     console.log("object");
//   }

//   return <></>
// }
