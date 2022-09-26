import { TopNavLink } from "./TopNewsNav.styled";

const stylesNav = {
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: "10px",
};

const linkStyles = { padding: "10px", border: "1px solid blue" };
// const activeStyle = { color: "red", border: "1px solid red" };

const TopNewsNav = () => {
  return (
    <nav style={stylesNav}>
      <TopNavLink to="ua">UA</TopNavLink>
      <TopNavLink to="pl">PL</TopNavLink>
      <TopNavLink to="us">US</TopNavLink>
      <TopNavLink to="fr">FR</TopNavLink>
      <TopNavLink to="/todo">Some Link</TopNavLink>
    </nav>
  );
};

export default TopNewsNav;
