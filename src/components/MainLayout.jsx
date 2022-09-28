import { Suspense } from "react";
import { Outlet } from "react-router";
import Navigation from "./Navigation";

const MainLayout = () => {
  return (
    <>
      <Navigation />
      {/* <Suspense fallback={<h1>Loading around outlet...</h1>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default MainLayout;
