import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

// const setActiveLink = (state) => {
//   console.log(state);
//   return !state.isActive ? s.navLink : `${s.navLink} ${s.active}`;
// };

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {/* <li className={s.navItem}>
          <NavLink
            to="/"
            className={(state) => {
              console.log(state);
              return !state.isActive ? s.navLink : `${s.navLink} ${s.active}`;
            }}
          >
            Home
          </NavLink>
        </li> */}
        <li className={s.navItem}>
          <NavLink
            to="/news"
            className={s.navLink}
            style={({ isActive }) =>
              isActive ? { backgroundColor: "red" } : {}
            }
          >
            News
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            to="/counter"
            className={s.navLink}
            style={({ isActive }) =>
              isActive ? { backgroundColor: "red" } : {}
            }
          >
            Counter
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            to="/todo"
            className={s.navLink}
            style={({ isActive }) =>
              isActive ? { backgroundColor: "red" } : {}
            }
          >
            Todo
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            to="/top-news"
            className={s.navLink}
            style={({ isActive }) =>
              isActive ? { backgroundColor: "red" } : {}
            }
          >
            TopNews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  handleOpenActivePage: PropTypes.func.isRequired,
};

export default Navigation;
