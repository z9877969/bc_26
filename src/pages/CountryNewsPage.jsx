import { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import CountryNewsList from "../components/CountryNewsList/CountryNewsList";
import NewsList from "../components/NewsList/NewsList";

const CountryNewsPage = ({ match }) => {
  

  return (
    <>
      <h1>CountryNewsPage</h1>
      <button type="button">GoBack</button>
      <ul>
        <li>
          <NavLink to={match.url + "/ua"}>UA</NavLink>
        </li>
        <li>
          <NavLink to={match.url + "/us"}>US</NavLink>
        </li>
        <li>
          <NavLink to={match.url + "/pl"}>PL</NavLink>
        </li>
        <li>
          <NavLink to={match.url + "/fr"}>FR</NavLink>
        </li>
      </ul>
      <Route
        path="/country-news/:country"
        component={(routerProps) => <CountryNewsList {...routerProps} />}
      />
    </>
  );
};

export default CountryNewsPage;
