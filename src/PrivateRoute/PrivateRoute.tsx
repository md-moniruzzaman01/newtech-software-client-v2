import { Navigate, useLocation } from "react-router-dom";
import { PrivateRouteProps } from "./config/types";
import LoadingPage from "../common/components/LoadingPage/LoadingPage";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const loading = false;
  const user = true;
  const location = useLocation();

  if (loading) {
    return <LoadingPage />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
