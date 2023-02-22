import { CardTech } from "./CardTech";
import { StyledCardTechContainer } from "./CardTechList";

export const CardTechList = () => {
  return (
    <>
      <StyledCardTechContainer>
        <ul>
          <CardTech />
        </ul>
      </StyledCardTechContainer>
    </>
  );
};
