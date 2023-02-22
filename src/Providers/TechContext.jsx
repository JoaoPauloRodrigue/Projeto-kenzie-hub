import { createContext, useEffect, useState } from "react";
import { apiKenzieHub } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);

  //carrega a lista de cardtech
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const cardTechListLoad = async () => {
      try {
        const response = await apiKenzieHub.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCardData(response.data.techs);
      } catch (error) {
        console.log("error");
      }
    };
    cardTechListLoad();
  }, []);

  const cardTechAdd = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await apiKenzieHub.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCardData([cardData.response.data]);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <TechContext.Provider value={{ cardData, cardTechAdd }}>
      {children}
    </TechContext.Provider>
  );
};
