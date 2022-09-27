import { Outlet } from "react-router";
import Navigation from "./Navigation";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainLayout;
