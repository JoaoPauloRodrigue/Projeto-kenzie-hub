import styled from "styled-components";

export const StyledInput = styled.input`
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
  color: var(--color-grey-0);

  &:hover {
    border: 0.9772px solid var(--color-grey-0);
  }

  &:focus {
    border: 0.9772px solid var(--color-grey-0);
    color: var(--color-grey-0);
  }

  &::placeholder {
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
    color: var(--color-grey-0);

    &:hover {
      border: 1.2182px solid var(--color-grey-0);
    }

    &:focus {
      border: 1.2182px solid var(--color-grey-0);
    }
  }
`;
