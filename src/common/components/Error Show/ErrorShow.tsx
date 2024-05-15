import { useNavigate } from "react-router-dom";
import { authKey } from "../../../shared/config/constaints";
import { removeUserInfo } from "../../../services/auth.service";
import swal from "sweetalert";

const ErrorShow = ({ error }) => {
  const navigate = useNavigate();
  if (!error || !error.data) {
    return null; // If error object or data is missing, return null
  }

  if (error?.status === 403 || error.status === 401 || error.status === 404) {
    removeUserInfo(authKey);
    swal({
      title: "Error",
      text: error?.data.message || "Unknown error occurred",
      icon: "error",
    }).then(() => {
      navigate("/login");
    });
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
