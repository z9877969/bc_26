import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TodoPage from "./pages/TodoPage";
import CounterPage from "./pages/CounterPage";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, getIsLoading } from "./redux/auth/authSelectors";
import { useEffect } from "react";
import { updateUserInfo } from "./redux/auth/authOperations";
import Error from "./components/Error/Error";

import axios from "axios";

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuth);

  return !isAuth ? children : <Navigate to="/todo" />;
};

const PrivateRoute = ({ component }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? component : <Navigate to="/login" />;
};

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(updateUserInfo());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {/* {isLoading && <h1>Loading...</h1>} */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/counter"
            element={<PrivateRoute component={<CounterPage />} />}
          />
          <Route
            path="/todo"
            element={<PrivateRoute component={<TodoPage />} />}
          />
        </Routes>
      )}
      <Error />
    </>
  );
};

export default App;

// const fetch = async () => {
//   try {
//     await axios.post("https://connections-api.herokuapp.com/users/login", {
//       // name: "Bart",
//       email: "bart@mail.com",
//       password: "1234567",
//     });
//   } catch (error) {
//     console.log(JSON.parse(error.request.response));
//     console.log(error.request.status);
//     const newError = {
//       request: "login",
//       status: error.request.status,
//     };
//     console.log("newError :>> ", newError);
//   }
// };

// fetch();
{
  /* <PrivateRoute qwe={<CounterPage />} /> 
PrivateRoute({qwe: CounterPage()}) */
}
