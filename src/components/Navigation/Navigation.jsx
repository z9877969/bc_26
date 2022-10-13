import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";
import s from "./Navigation.module.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.navList}>
          {isAuth ? (
            <>
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
            </>
          ) : (
            <>
              <li className={s.navItem}>
                <NavLink to="/login" className={s.navLink}>
                  Login
                </NavLink>
              </li>
              <li className={s.navItem}>
                <NavLink to="/register" className={s.navLink}>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {isAuth && (
          <button type="button" onClick={() => dispatch(logOut())}>
            LogOut
          </button>
        )}
      </nav>
    </>
  );
};

export default Navigation;
