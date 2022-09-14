import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import Container from "../Container/Container";
import { Wrapper, MainBlock } from "./Main.styled";

const Main = (props) => {
  const { productsFromApp, addToCart } = props;
  return (
    <MainBlock>
      <Container title="Our Products">
        <Wrapper>
          <Filter />
          <ProductsList
            productsFromMain={productsFromApp}
            addToCart={addToCart}
          />
        </Wrapper>
      </Container>
    </MainBlock>
  );
};

Main.propTypes = {
  productsFromApp: PropTypes.array.isRequired,
};

export default Main;
