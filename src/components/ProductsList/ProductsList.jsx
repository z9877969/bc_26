import PropTypes from "prop-types";
import { List, Item, Price } from "./ProductsList.styled";
import "./ProductsList.css";

const ProductsList = ({ productsFromMain, addToCart }) => {
  return (
    <List color="red">
      {productsFromMain.map((product, i) => {
        return (
          <Item key={product.id}>
            <div className="products__image-wrapper">
              <p className="products__sale">Акція</p>
              <img className="products__image" src={product.url} alt="" />
            </div>
            <div className="products__descr">
              <h3 className="products__model">{product.model}</h3>
              <Price isSmallPrice={Number(product.price) < 10000}>
                {product.price ? product.price : "Ціна відсутня"}
              </Price>
              {product.price && (
                <span className="products__currency">{product.currency}</span>
              )}
            </div>
            <button
              onClick={() => addToCart(product)}
              className="products__btn-buy"
              type="button"
            >
              Купити
            </button>
          </Item>
        );
      })}
    </List>
  );
};

ProductsList.propTypes = {
  productsFromMain: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      currency: PropTypes.string,
      model: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default ProductsList;

// const fn = () => {
//   return {};
// };

// const a1 = fn();
// const a2 = fn();

// React.createElement("li", {}, React.createElement)