import { NavLink } from "react-router-dom";

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: "red", fontWeight: "bold" } : null;

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        width: "400px",
        margin: "0 auto",
        justifyContent: "space-around",
      }}
    >
      <NavLink
        style={setActiveStyle}
        // className={({ isActive }) => (isActive ? "s.link s.active" : "s.link")}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink style={setActiveStyle} to="/search-news?q=uyt#654">
        SearchNews
      </NavLink>
      <NavLink style={setActiveStyle} to="/country-news">
        CountryNews
      </NavLink>
    </nav>
  );
};

export default Navigation;
