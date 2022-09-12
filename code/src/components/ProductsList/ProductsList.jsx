import PropTypes from "prop-types";
import "./ProductsList.css";

// console.log("products :>> ", products);

const ProductsList = ({ productsFromMain, title }) => {
  return (
    <ul className="products">
      {productsFromMain.map((product) => {
        return (
          <li key={product.id} className="products__item">
            <div className="products__image-wrapper">
              <p className="products__sale">Акція</p>
              <img className="products__image" src={product.url} alt="" />
            </div>
            <div className="products__descr">
              <h3 className="products__model">{product.model}</h3>
              <span className="products__price">
                {product.price ? product.price : "Ціна відсутня"}
              </span>
              {/* {product.price ? (
                <span className="products__currency">{product.currency}</span>
              ) : null} */}
              {product.price && (
                <span className="products__currency">{product.currency}</span>
              )}
            </div>
            <button className="products__btn-buy" type="button">
              Купити
            </button>
          </li>
        );
      })}
    </ul>
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

// true && 25 -> 25

// false && 32 -> false
