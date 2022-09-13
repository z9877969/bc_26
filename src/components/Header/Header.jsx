import Container from "../Container/Container";
import "./Header.css";
import { logoImg } from "../../assets/img";
import sprite from "../../assets/icons/sprite.svg";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <a href="/" className="header__logo">
          <img src={logoImg} className="header__logo" alt="logo" />
        </a>
        <div className="header__user-info">
          <span className="header__user-name">B</span>
          <span className="header__user-email">user@mail.com</span>
        </div>
        <div className="header__cart-info">
          <button type="button" className="header__btn-cart">
            <svg>
              <use href={sprite + "#icon-cart"}></use>
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
