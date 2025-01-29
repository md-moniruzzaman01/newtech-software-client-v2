import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../../../services/auth.service";
import { authKey } from "../../../shared/config/constaints";

const ErrorShow = ({ error }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.status === 403 || error?.status === 401) {
      removeUserInfo(authKey);

      if (error?.data?.message === "Token expired") {
        navigate("/login");
      }
    }
  }, [error, navigate]);

  if (!error || !error.data) {
    return null;
  }

  return (
    <div>
      <h1>
        Error <span>{error.status}</span>
      </h1>
      <div>
        <p>{error.data.message || "Unknown error event"}</p>
        {error.data.errorMessages.map((errorMessage) => (
          <p key={errorMessage.path}>
            <strong>{errorMessage.path}: </strong>
            {errorMessage.message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ErrorShow;
