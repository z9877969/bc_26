import { useEffect, useState } from "react";
import { NavLink, Outlet, Route, Routes, useParams } from "react-router-dom";
import NewsList from "../components/NewsList/NewsList";
import { getCountryNews } from "../utils/newsApi";
// import NewsList from "../components/NewsList/NewsList";

const CountryNewsPage = () => {
  const { country } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (!country) return;
    getCountryNews(country)
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, [country]);

  return (
    <>
      <h1>CountryNewsPage</h1>
      <ul>
        <li>
          {/* /country-news + /ua */}
          <NavLink to="ua">UA</NavLink>
        </li>
        <li>
          <NavLink to="us">US</NavLink>
        </li>
        <li>
          <NavLink to="pl">PL</NavLink>
        </li>
        <li>
          <NavLink to="fr">FR</NavLink>
        </li>
      </ul>
      <Outlet />
      {/* <Routes>
        <Route path=":country" element={<NewsList news={news} />} />
      </Routes> */}
    </>
  );
};

export default CountryNewsPage;
