import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null);
  const [loding, setLoding] = useState(false);

  const navigate = useNavigate();

  //autoLogin
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await apiKenzieHub.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserLogin(response.data);
          navigate("/dashboard");
        } catch (error) {}
      };
      userAutoLogin();
    }
  }, []);

  const registeredUser = async (data) => {
    try {
      const response = await apiKenzieHub.post("users", data);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      navigate("/");
    }
  };

  const LoginUser = async (formData) => {
    try {
      const response = await apiKenzieHub.post("sessions", formData);
      toast.success("Login efetuado com sucesso!");
      setUserLogin(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/dashboard");

      setLoding(true);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoding(false);
    }
  };

  const userLogOut = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUserLogin(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        registeredUser,
        LoginUser,
        userLogin,
        setUserLogin,
        loding,
        setLoding,
        userLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
