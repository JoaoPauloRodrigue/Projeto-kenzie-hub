import styled from "styled-components";

export const StyledContainerRegisterPage = styled.section`
  & {
    margin-top: 38px;
  }
  .container-logo-and-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .container-logo-and-btn {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-width: 296px;
      max-width: 369px;
    }

    & a {
      padding: 6px 20px;
      font-family: "Inter";
      font-weight: 600;
      font-size: 9.59437px;
      border-radius: 4px;
      background-color: var(--color-grey-3);
      border: 1.2px solid var(--color-grey-3);
      color: var(--color-grey-0);
      text-decoration: none;
      text-align: center;
    }

    @media (min-width: 700px) {
      gap: 36px;

      & a {
        padding: 10px 16.2426px;
        font-size: 12px;
      }
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
