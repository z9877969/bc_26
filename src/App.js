import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./pages/TodoPage";
import CounterPage from "./pages/CounterPage";
import NewsPage from "./pages/NewsPage";
import TopNewsPage from "./pages/TopNewsPage";
import TopCountryNews from "./components/CountryNews/CountryNews";

const MainWrapper = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route index element={<h1>MainPage</h1>} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="top-news" element={<TopNewsPage />}>
            <Route path=":country" element={<TopCountryNews />} />
          </Route>
          <Route path="*" element={<Navigate to="/news" />} />
        </Route>
      </Routes>
    </>
  );
};

// "/top-news/:country/:id/:color"
//  /top-news/fr/654654/red

export default App;

// {
//   /*  */
// }
