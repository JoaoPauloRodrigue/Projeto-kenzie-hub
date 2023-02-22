import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { RoutesPage } from "./router/routes";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "./Providers/UserContext";

export const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <RoutesPage />
      </UserProvider>
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
