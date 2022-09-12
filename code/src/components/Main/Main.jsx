import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import Container from "../Container/Container";

const Main = (props) => {
  const { productsFromApp } = props;
  return (
    <main>
      <Container title="Our Products">
        <Filter />
        <ProductsList
          a={true}
          b={<h1>Hello</h1>}
          c={[]}
          productsFromMain={productsFromApp}
        />
      </Container>

      {/* {ProductsList({ a: true, b: 25, c: [] })} */}
    </main>
  );
};

Main.propTypes = {
  productsFromApp: PropTypes.array.isRequired,
};

export default Main;
