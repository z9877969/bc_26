import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink to="/counter" className={s.navLink}>
              Counter
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/todo" className={s.navLink}>
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
