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

  .container-not-tech {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  & p {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-grey-0);

    @media (min-width: 700px) {
      font-size: 18px;
    }
  }
`;
