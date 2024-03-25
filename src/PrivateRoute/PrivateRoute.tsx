import { Navigate, useNavigate } from "react-router-dom";
import { PrivateRouteProps } from "./config/types";
import LoadingPage from "../common/components/LoadingPage/LoadingPage";
import { isLoggedIn } from "../services/auth.service";
import { useEffect, useState } from "react";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const loading = false;
  const user = true;
  const navigate = useNavigate();

  const userLoggedIn = isLoggedIn();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/login");
    }
    setIsLoading(true);
  }, [location, isLoading]);


  if (loading) {
    return <LoadingPage />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
