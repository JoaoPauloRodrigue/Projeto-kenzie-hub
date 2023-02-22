import styled from "styled-components";

export const StyledModal = styled.section`
  & {
    position: absolute;
    height: 295px;
    background-color: var(--color-grey-4);
    border-radius: 3.2px;

    @media (min-width: 700px) {
      height: 352px;
    }
  }

  .header-modal-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: var(--color-grey-2);
    border-radius: 3.2px 3.2px 0px 0px;
    padding: 0px 16px;
    margin-bottom: 20px;

    @media (min-width: 700px) {
      height: 50px;
      padding: 0px 20px;
      margin-bottom: 24px;
    }
  }
  .header-modal-title h2 {
    font-weight: 700;
    font-size: 11.1924px;
    color: var(--color-grey-0);

    @media (min-width: 700px) {
      font-size: 14px;
    }
  }

  .header-modal-title span {
    font-weight: 700;
    font-size: 12.8px;
    color: var(--color-grey-1);
    cursor: pointer;

    @media (min-width: 700px) {
      font-size: 16px;
    }
  }

  .formModal {
    display: flex;
    flex-direction: column;
    gap: 19px;

    @media (min-width: 700px) {
      font-size: 24px;
    }
  }

  .header-modal-title span:hover {
    color: var(--color-grey-0);
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 0px 14px;

    @media (min-width: 700px) {
      gap: 22px;
      padding: 0px 22px;
    }
  }

  & {
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

  .container-btn-modal-edit-delete {
    display: flex;
    flex-direction: row;
  }
`;
