import styled from "styled-components";

export const StyledContainerMainDash = styled.main`
  & {
    display: none;

    @media (min-width: 700px) {
      display: block;
      padding: 0px 200px;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 23px;
    padding-top: 37px;
  }

  & h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: var(--color-grey-0);
  }

  & h6 {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    color: var(--color-white);
  }
`;
