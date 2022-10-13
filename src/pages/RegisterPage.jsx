import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = (form) => {
    dispatch(registerUser(form));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <AuthForm cbOnSubmit={handleRegisterUser} submitContent="Register" />
    </>
  );
};

export default RegisterPage;
