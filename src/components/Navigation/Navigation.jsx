import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemProvider";
import s from "./Navigation.module.scss";

const Navigation = ({ handleOpenActivePage }) => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        Theme
      </button>
      <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <a
              href="/"
              className={s.navLink}
              onClick={(e) => {
                e.preventDefault();
                handleOpenActivePage("home");
              }}
            >
              Home
            </a>
          </li>
          <li className={s.navItem}>
            <a
              href="/"
              className={s.navLink}
              onClick={(e) => {
                e.preventDefault();
                handleOpenActivePage("counter");
              }}
            >
              Counter
            </a>
          </li>
          <li className={s.navItem}>
            <a
              href="/"
              className={s.navLink}
              onClick={(e) => {
                e.preventDefault();
                handleOpenActivePage("todo");
              }}
            >
              Todo
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  handleOpenActivePage: PropTypes.func.isRequired,
};

export default Navigation;
