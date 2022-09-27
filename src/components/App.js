import { Navigate, Route, Routes } from "react-router-dom";
import CountryNewsPage from "../pages/CountryNewsPage";
import HomePage from "../pages/HomePage";
import SearchNewsPage from "../pages/SearchNewsPage";
import MainLayout from "./MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search-news" element={<SearchNewsPage />} />
          <Route path="/country-news" element={<CountryNewsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
