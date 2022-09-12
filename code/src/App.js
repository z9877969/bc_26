import { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import products from "./data/products.json";
import "./App.css";

function App() {
  return (
    // <div className="App">
    <>
      <Header />
      <Main productsFromApp={products} />
      <Cart />
    </>
    // </div>
  );
}

export default App;
