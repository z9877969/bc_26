import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import NewsList from "../components/NewsList/NewsList";
import { getCountryNews } from "../utils/newsApi";
// import NewsList from "../components/NewsList/NewsList";

const CountryNewsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <h1>CountryNewsPage</h1>
      <button type="button" onClick={() => navigate(location.state)}>
        GoBack
      </button>
      <ul>
        <li>
          {/* location -> {pathname: /country-news/ua, search: "", hash: "", state: "state from countryNews"} */}
          <NavLink to="ua" state={location.state}>
            UA
          </NavLink>
        </li>
        <li>
          <NavLink to="us" state={location.state}>
            US
          </NavLink>
        </li>
        <li>
          <NavLink to="pl" state={location.state}>
            PL
          </NavLink>
        </li>
        <li>
          <NavLink to="fr" state={location.state}>
            FR
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading CountryNewsList...</h1>}>
        <Outlet />
      </Suspense>
      {/* <Routes>
        <Route path=":country" element={<NewsList news={news} />} />
      </Routes> */}
    </>
  );
};

export default CountryNewsPage;
