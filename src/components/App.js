import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import CountryNewsPage from "../pages/CountryNewsPage";
// import HomePage from "../pages/HomePage";
// import SearchNewsPage from "../pages/SearchNewsPage";
import MainLayout from "./MainLayout";
// import NewsList from "../components/NewsList/NewsList";

const CountryNewsPage = lazy(() => import("../pages/CountryNewsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const SearchNewsPage = lazy(() => import("../pages/SearchNewsPage"));
const CountryNewsList = lazy(() => import("./CountryNewsList/CountryNewsList"));

const App = () => {
  return (
    <>
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search-news" element={<SearchNewsPage />} />
          <Route path="/country-news" element={<CountryNewsPage />}>
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
