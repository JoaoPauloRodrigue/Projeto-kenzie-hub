import { StyledCardTech } from "./CardTech";

export const CardTech = ({ card, setEditCard }) => {
  return (
    <>
      <StyledCardTech id={card.id} onClick={() => setEditCard(card)}>
        <div>
          <h2>{card.title}</h2>
          <h6>{card.status}</h6>
        </div>
      </StyledCardTech>
    </>
  );
};
