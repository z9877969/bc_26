import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import products from "./data/products.json";
import "./App.css";
import { Component } from "react";
// import Counter from "./components/Counter/Counter";

class App extends Component {
  static defaultProps = {
    a: 54,
    initialCount: false,
  };

  // static propTypes = {

  // }

  state = {
    isCartOpen: this.props.initialCount,
    a: this.props.a,
    cartProducts: [],
  };

  // openCart = () => {
  //   this.setState({ isCartOpen: true });
  // };

  // closeCart = () => {
  //   this.setState({ isCartOpen: false });
  // };

  toggleCart = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }));
  };

  addToCart = (product) => {
    this.setState((prev) => ({
      cartProducts: [...prev.cartProducts, product],
    }));
  };

  render() {
    const { isCartOpen, cartProducts } = this.state;
    return (
      <>
        <Header openCart={this.toggleCart} />
        <Main addToCart={this.addToCart} productsFromApp={products} />
        {isCartOpen && (
          <Cart
            isCartOpen={isCartOpen}
            products={cartProducts}
            closeCart={this.toggleCart}
          />
        )}
        {/* <Counter /> */}
      </>
    );
  }
}

export default App;

// App.propTypes = {

// }

// const a = false;
// const b = !a // !false -> true

// new Class({})
