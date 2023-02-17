import styled from "styled-components";

export const StyledContainerLoginRegister = styled.section`
  width: 100%;
  min-width: 296px;
  max-width: 369px;
  min-height: 402.69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-3);
  gap: 18px;
  padding: 38px 17.5px 20px 17.5px;

  @media (min-width: 700px) {
    min-height: 502px;
  }

  & p {
    font-family: "Inter";
    font-weight: 600;
    font-size: 9.62602px;
    color: var(--color-grey-1);
  }

  & a {
    width: 100%;
    height: 38.5px;
    padding: 10px 22.3336px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 12.8347px;
    border-radius: 4px;
    background-color: var(--color-grey-1);
    border: 1.2px solid var(--color-grey-1);
    color: var(--color-grey-0);
    text-decoration: none;
    text-align: center;

    &:hover {
      background-color: var(--color-grey-2);
      border: 1.2px solid var(--color-grey-2);
    }

    @media (min-width: 700px) {
      padding: 13px 22.3336px;
      font-size: 16px;
      height: 48px;
    }
  }

  @media (min-width: 700px) {
    padding: 48px 22px 28px 22px;
    gap: 23px;

    p {
      font-size: 12px;
    }
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  min-width: 260px;
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  @media (min-width: 700px) {
    gap: 23px;
  }

  & h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 14.439px;
    color: var(--color-grey-0);

    @media (min-width: 700px) {
      & {
        font-size: 18px;
      }
    }
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media (min-width: 700px) {
      & {
        gap: 23px;
      }
    }
  }

  & label {
    font-family: "Inter";
    font-weight: 400;
    font-size: 9.772px;
    color: var(--color-grey-0);

    @media (min-width: 700px) {
      & {
        font-size: 12.182px;
      }
    }
  }

  & select {
    width: 100%;
    min-width: 260px;
    height: 38.5px;
    font-family: "Inter";
    font-weight: 400;
    font-size: 12.9865px;
    padding: 0px 13.0293px;
    background-color: var(--color-grey-2);
    border: 0.9772px solid var(--color-grey-2);
    border-radius: 3.20867px;
    outline: none;
    color: var(--color-grey-1);

    &:hover {
      border: 0.9772px solid var(--color-grey-0);
    }

    &:focus {
      border: 0.9772px solid var(--color-grey-0);
      color: var(--color-grey-0);
    }

    &:checked {
      color: var(--color-grey-1);
    }

    @media (min-width: 700px) {
      max-width: 329.93px;
      height: 48px;
      font-family: "Inter";
      font-weight: 400;
      font-size: 16.2426px;
      padding: 0px 16.2426px;
      border: 1.2182px solid var(--color-grey-2);
      border-radius: 4px;
      color: var(--color-grey-1);

      &:hover {
        border: 1.2182px solid var(--color-grey-0);
      }

      &:focus {
        border: 1.2182px solid var(--color-grey-0);
      }
    }
  }

  & span {
    font-family: "Inter";
    font-weight: 400;
    font-size: 9px;
    color: var(--color-negative);

    @media (min-width: 700px) {
      font-size: 12px;
    }
  }
`;
