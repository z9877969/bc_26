import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuthError } from "../../redux/auth/authSelectors";

const Error = () => {
  const authError = useSelector(getAuthError);

  useEffect(() => {
    if (authError?.request === "login") {
      alert("Invalid data");
    }
    authError === "EMAIL_EXISTS" && alert("EMAIL_EXISTS");
    authError === "EMAIL_NOT_FOUND" && alert("EMAIL_NOT_FOUND");
  }, [authError]);
  return null;
};

export default Error;
