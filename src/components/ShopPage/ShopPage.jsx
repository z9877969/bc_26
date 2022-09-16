import { Component } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import products from "../../data/products.json";

class ShopPage extends Component {
  state = {
    cartProducts: [],
  };

  addToCart = (product) => {
    this.setState((prev) => ({
      cartProducts: [...prev.cartProducts, product],
    }));
  };

  render() {
    const { cartProducts } = this.state;
    const { isCartOpen, toggleCart } = this.props;
    return (
      <>
        <Main addToCart={this.addToCart} productsFromApp={products} />

        <Cart
          isCartOpen={isCartOpen}
          products={cartProducts}
          closeCart={toggleCart}
        />
      </>
    );
  }
}

export default ShopPage;
