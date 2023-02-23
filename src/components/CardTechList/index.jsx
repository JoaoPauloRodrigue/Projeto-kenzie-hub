import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { CardTech } from "./CardTech";
import { StyledCardTechContainer } from "./CardTechList";

export const CardTechList = () => {
  const { cardData, setEditCard, setTitleCard } = useContext(TechContext);

  return (
    <>
      <StyledCardTechContainer>
        {cardData.length > 0 ? (
          <ul>
            {cardData.map((card) => (
              <CardTech
                card={card}
                key={card.id}
                setEditCard={setEditCard}
                setTitleCard={setTitleCard}
              />
            ))}
          </ul>
        ) : (
          <div className="container-not-tech">
            <p>Nenhuma tecnologia cadastrada</p>
          </div>
        )}
      </StyledCardTechContainer>
    </>
  );
};
