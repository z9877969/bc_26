import { Route, Routes, Outlet, useParams } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./pages/TodoPage";
import CounterPage from "./pages/CounterPage";
import NewsPage from "./pages/NewsPage";
import TopNewsPage from "./pages/TopNewsPage";
import TopCountryNews from "./components/CountryNews/CountryNews";

// const SomeComp = () => <h1>ContryNews with color RED</h1>;



const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/top-news" element={<TopNewsPage />}>
          <Route path=":country" element={<TopCountryNews />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
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
