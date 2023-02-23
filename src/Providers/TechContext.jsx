import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [editCard, setEditCard] = useState(null);
  const [titleCard, setTitleCard] = useState([]);

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

  const cardTechEdit = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await apiKenzieHub.put(
        `/users/techs/${editCard}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedEditCardData = cardData.map((card) => {
        if (editCard === card.id) {
          return { ...card, ...formData };
        } else {
          return card;
        }
      });
      setCardData(updatedEditCardData);
      toast.success("Tecnologia editada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const cardTechDelete = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await apiKenzieHub.delete(`/users/techs/${editCard}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //atualizar página front end
      const updatedCardData = cardData.filter((card) => card.id !== editCard);
      setCardData(updatedCardData);
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      console.log(error);
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
        titleCard,
        setTitleCard,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
