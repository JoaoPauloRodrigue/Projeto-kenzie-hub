import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [editCard, setEditCard] = useState(null);
  const [OpenEditModal, setOpenEditModal] = useState(false);

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

      setCardData([...cardData, response.data]);
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const cardTechEdit = async (idCard, formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await apiKenzieHub.put(
        `/users/techs/${idCard}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedEditCardData = cardData.map((card) => {
        if (idCard === card.id) {
          return { ...card, ...formData };
        } else {
          return card;
        }
      });
      setCardData(updatedEditCardData);
      toast.success("Tecnologia editada com sucesso!");
    } catch (error) {
      console.log("error");
    }
  };

  const cardTechDelete = async (idCard) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await apiKenzieHub.delete(`/users/techs/${idCard}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedCardData = cardData.filter((card) => card.id !== idCard);
      setCardData(updatedCardData);
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <TechContext.Provider
      value={{
        cardData,
        cardTechAdd,
        cardTechEdit,
        editCard,
        setEditCard,
        cardTechDelete,
        OpenEditModal,
        setOpenEditModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
