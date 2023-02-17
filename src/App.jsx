import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { RoutesPage } from "./router/routes";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const [userLogin, setUserLogin] = useState(null);
  const navigate = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUserLogin(null);
    navigate("/");
  };

  return (
    <div className="App">
      <RoutesPage
        setUserLogin={setUserLogin}
        userLogin={userLogin}
        userLogOut={userLogOut}
      />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
