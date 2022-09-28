import { Navigate, Route, Routes } from "react-router-dom";
import CountryNewsPage from "../pages/CountryNewsPage";
import HomePage from "../pages/HomePage";
import SearchNewsPage from "../pages/SearchNewsPage";
import MainLayout from "./MainLayout";
import NewsList from "../components/NewsList/NewsList";
import CountryNewsList from "./CountryNewsList/CountryNewsList";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
