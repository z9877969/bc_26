import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchNewsPage from "../pages/SearchNewsPage";
import CountryNewsPage from "../pages/CountryNewsPage";
import Navigation from "../components/Navigation";
import LoaderProvider, { LoaderContext } from "../context/LoaderProvider";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/search-news"
          component={(routerProps) => (
            <LoaderContext.Consumer>
              {(param) => (
                <SearchNewsPage setIsLoading={param} {...routerProps} />
              )}
            </LoaderContext.Consumer>
          )}
        />
        <Route path="/country-news" component={CountryNewsPage} />
      </Switch>
    </>
  );
};

export default App;

