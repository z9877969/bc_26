import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import CountryNewsPage from "../pages/CountryNewsPage";
// import HomePage from "../pages/HomePage";
// import SearchNewsPage from "../pages/SearchNewsPage";
import MainLayout from "./MainLayout";
// import NewsList from "../components/NewsList/NewsList";
import CountryNewsList from "./CountryNewsList/CountryNewsList";

const CountryNewsPage = lazy(() => import("../pages/CountryNewsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const SearchNewsPage = lazy(() => import("../pages/SearchNewsPage"));

const App = () => {
  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<h2>Loading HomePage</h2>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/search-news"
            element={
              <Suspense fallback={<h2>Loading SearchNewsPage</h2>}>
                <SearchNewsPage />
              </Suspense>
            }
          />
          <Route
            path="/country-news"
            element={
              <Suspense fallback={<h2>Loading CountryNewsPage</h2>}>
                <CountryNewsPage />
              </Suspense>
            }
          >
            <Route path=":country" element={<CountryNewsList />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
};

export default App;
