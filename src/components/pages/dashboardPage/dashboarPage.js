import styled from "styled-components";

export const StyledContainerMainDash = styled.main`
  & {
    @media (min-width: 700px) {
      display: flex;
      justify-content: center;
    }
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 23px;
    padding-top: 15px;
  }

  .container-tech-btn-add {
    max-width: 780px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & svg {
    width: 20px;
    height: 20px;
    color: var(--color-grey-3);
    background-color: var(--color-white);
    border: 1px solid var(--color-grey-3);
    border-radius: 4px;
    cursor: pointer;
  }

  & svg:hover {
    color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }

  & h2 {
    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
    color: var(--color-grey-0);
  }
`;
