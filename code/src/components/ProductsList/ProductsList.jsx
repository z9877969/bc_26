import "./ProductsList.css";

const ProductsList = () => {
  return (
    <ul className="products">
      <li className="products__item">
        <div className="products__image-wrapper">
          <p className="products__sale">Акція</p>
          <img
            className="products__image"
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
        </div>
        <div className="products__descr">
          <h3 className="products__model">ZTE RedMagic</h3>
          <span className="products__price">11999</span>
          <span className="products__currency">UAH</span>
        </div>
        <button className="products__btn-buy" type="button">
          Купити
        </button>
      </li>
      <li className="products__item">
        <img
          className="products__image"
          src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
          alt=""
        />
        <div className="products__descr">
          <h3 className="products__model">ZTE RedMagic</h3>
          <span className="products__price">11999</span>
          <span className="products__currency">UAH</span>
        </div>
        <button className="products__btn-buy" type="button">
          Купити
        </button>
      </li>
      <li className="products__item">
        <img
          className="products__image"
          src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
          alt=""
        />
        <div className="products__descr">
          <h3 className="products__model">ZTE RedMagic</h3>
          <span className="products__price">11999</span>
          <span className="products__currency">UAH</span>
        </div>
        <button className="products__btn-buy" type="button">
          Купити
        </button>
      </li>
      <li className="products__item">
        <img
          className="products__image"
          src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
          alt=""
        />
        <div className="products__descr">
          <h3 className="products__model">ZTE RedMagic</h3>
          <span className="products__price">11999</span>
          <span className="products__currency">UAH</span>
        </div>
        <button className="products__btn-buy" type="button">
          Купити
        </button>
      </li>
      <li className="products__item">
        <img
          className="products__image"
          src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
          alt=""
        />
        <div className="products__descr">
          <h3 className="products__model">ZTE RedMagic</h3>
          <span className="products__price">11999</span>
          <span className="products__currency">UAH</span>
        </div>
        <button className="products__btn-buy" type="button">
          Купити
        </button>
      </li>
    </ul>
  );
};

export default ProductsList;
