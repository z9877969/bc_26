import Container from "../Container/Container";
import {
  HeaderStyled,
  Link,
  Image,
  UserInfoWrapper,
  CartInfoWrapper,
} from "./Header.styled";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { logoImg } from "../../assets/img";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ openCart, activePage, handleOpenActivePage }) => {
  return (
    <HeaderStyled>
      <Container>
        <Link href="/">
          <Image src={logoImg} />
        </Link>
        <Navigation handleOpenActivePage={handleOpenActivePage} />
        <UserInfoWrapper>
          <span className="user-name">B</span>
          <span className="user-email">user@mail.com</span>
        </UserInfoWrapper>
        {activePage === "shop" && (
          <CartInfoWrapper>
            <button
              onClick={openCart}
              type="button"
              className="header__btn-cart"
            >
              <svg>
                <use href={sprite + "#icon-cart"}></use>
              </svg>
            </button>
          </CartInfoWrapper>
        )}
      </Container>
    </HeaderStyled>
  );
};

export default Header;
