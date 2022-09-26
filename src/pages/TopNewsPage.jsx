import { Outlet } from "react-router-dom";
import TopNewsNav from "../components/TopNewsNav/TopNewsNav";

const TopNewsPage = () => {
  return (
    <>
      <h1>TopNewsPage</h1>
      <TopNewsNav />
      <Outlet />
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default TopNewsPage;
