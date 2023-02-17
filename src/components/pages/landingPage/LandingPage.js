import styled from "styled-components";

export const StyledContainerLandingPage = styled.div`
  & {
    height: 100%;
  }

  .container-logo-and-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (min-width: 700px) {
      gap: 36px;
    }
  }

  .logo-title {
    width: 101px;
    height: 14px;

    @media (min-width: 700px) {
      width: 144.06px;
      height: 19.97px;
    }
  }
`;
