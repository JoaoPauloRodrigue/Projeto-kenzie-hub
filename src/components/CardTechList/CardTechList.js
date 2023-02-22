import styled from "styled-components";

export const StyledCardTechContainer = styled.section`
  & {
    min-width: 240px;
    width: 100%;
    max-width: 780px;
    height: 416.37px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    overflow-y: auto;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8.5px;

    @media (min-width: 700px) {
      padding: 20px;
    }
  }
`;
