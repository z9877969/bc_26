import { NavLink, useLocation } from "react-router-dom";

// const setActiveStyle = ({ isActive }) =>
//   isActive ? { color: "red", fontWeight: "bold" } : null;

const Navigation = () => {
  const location = useLocation();

  console.log(location);

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
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/search-news"
      >
        SearchNews
      </NavLink>
      <NavLink
        to="/country-news"
        state={location}
      >
        CountryNews
      </NavLink>
    </nav>
  );
};

export default Navigation;

// {
//   pathname: "/country-news",
//   search: "",
//   hash: "",
//   state: currentLocation
// }
