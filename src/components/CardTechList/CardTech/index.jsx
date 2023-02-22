import { StyledCardTech } from "./CardTech";

export const CardTech = ({ card }) => {
  return (
    <>
      <StyledCardTech>
        <div>
          <h2>{card.title}</h2>
          <h6>{card.status}</h6>
        </div>
      </StyledCardTech>
    </>
  );
};
