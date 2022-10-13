import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./components/TodoPage/TodoPage";
import CounterPage from "./components/CounterPage/CounterPage";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, getIsLoading } from "./redux/auth/authSelectors";
import { useEffect } from "react";
import { updateUserInfo } from "./redux/auth/authOperations";

const App = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);
  const isLoading = useSelector(getIsLoading);

  // const location = useLocation();
  // useEffect(() => {
  //   if (location.search) {
  //     const search = new URLSearchParams(location.search);
  //     const token = search.get("token");
  //     const sid = search.get("sid");
  //     const refreshToken = search.get("refreshToken");
  //     if (token) {
  //       // dispatch(setAuthData({}))
  //       console.log({ token, sid, refreshToken });
  //     }
  //   }
  // }, [location.search]);

  useEffect(() => {
    dispatch(updateUserInfo())
  }, [dispatch])

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <Navigation />
      {!isAuth ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<Navigate to="todo" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
