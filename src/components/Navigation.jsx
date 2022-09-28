import { NavLink, useLocation } from "react-router-dom";

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: "red", fontWeight: "bold" } : null;

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
        style={setActiveStyle}
        // className={({ isActive }) => (isActive ? "s.link s.active" : "s.link")}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink style={setActiveStyle} to="/search-news">
        SearchNews
      </NavLink>
      <NavLink style={setActiveStyle} to="/country-news" state={location}>
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
