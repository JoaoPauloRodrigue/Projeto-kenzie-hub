import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../../Providers/UserContext";

export const ProtectedRoutes = () => {
  const { userLogin } = useContext(UserContext);

  return <>{userLogin ? <Outlet /> : <Navigate to="/" />}</>;
};
