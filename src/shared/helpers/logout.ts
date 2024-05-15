import { Navigate } from "react-router-dom";
import { removeUserInfo } from "../../services/auth.service";
import { authKey } from "../config/constaints";
import swal from "sweetalert";

export const handleLogout = () => {
  removeUserInfo(authKey);
  swal("success", "Successfully logged out");
  Navigate({ to: "/login" });
};
