import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import "./App.css";

class App extends Component {
  state = {
    activePage: "todo",
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage: activePage });
  };

  render() {
    const { activePage } = this.state;
    return (
      <>
        <Navigation handleOpenActivePage={this.handleOpenActivePage} />
        {activePage === "todo" && <TodoPage />}
        {activePage === "home" && <h1>Welcome to our amazing app!!!</h1>}
      </>
    );
  }
}

export default App;
