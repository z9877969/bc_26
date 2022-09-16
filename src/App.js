import { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import ShopPage from "./components/ShopPage/ShopPage";
import "./App.css";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    activePage: "todo",
    isCartOpen: false,
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage: activePage });
  };

  toggleCart = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }));
  };

  render() {
    const { activePage, isCartOpen } = this.state;
    return (
      <>
        <Header
          openCart={this.toggleCart}
          activePage={activePage}
          handleOpenActivePage={this.handleOpenActivePage}
        />

        {activePage === "todo" && <TodoPage />}
        {activePage === "home" && <h1>Welcome to our amazing app!!!</h1>}
        {activePage === "shop" && (
          <ShopPage isCartOpen={isCartOpen} toggleCart={this.toggleCart} />
        )}
      </>
    );
  }
}

export default App;
