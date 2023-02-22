import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { CardTech } from "./CardTech";
import { StyledCardTechContainer } from "./CardTechList";

export const CardTechList = () => {
  const { cardData } = useContext(TechContext);

  return (
    <>
      <StyledCardTechContainer>
        <ul>
          {cardData.map((card) => (
            <CardTech card={card} key={card.id} />
          ))}
        </ul>
      </StyledCardTechContainer>
    </>
  );
};
