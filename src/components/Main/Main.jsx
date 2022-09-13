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
        <ProductsList productsFromMain={productsFromApp} />
      </Container>
    </main>
  );
};

Main.propTypes = {
  productsFromApp: PropTypes.array.isRequired,
};

export default Main;
