import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Providers/UserContext";

export const ProtectedRoutes = () => {
  const { userLogin } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin) {
      navigate("/");
    }
  }, []);

  return <>{userLogin ? <Outlet /> : null}</>;
};
