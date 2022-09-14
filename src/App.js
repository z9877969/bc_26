import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import products from "./data/products.json";
import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      {/* <Header />
      <Main productsFromApp={products} />
      <Cart /> */}
      <Counter />
    </>
  );
}

export default App;
