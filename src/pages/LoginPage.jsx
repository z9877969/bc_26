import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";
import { loginUserApi } from "../utils/firebaseApi";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = (form) => {
    dispatch(loginUser(form))
    // console.log(form);
    // loginUserApi(form);

  };

  return (
    <>
      <h1>LoginPage</h1>
      <AuthForm cbOnSubmit={handleLoginUser} submitContent="Login" />
    </>
  );
};

export default LoginPage;
