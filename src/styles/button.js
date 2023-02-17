import styled, { css } from "styled-components";

export const StyledBtn = styled.button`
  ${({ btnSize }) => {
    switch (btnSize) {
      case "default":
        return css`
          width: 100%;
          padding: 10px 22.3336px;
          font-family: "Inter";
          font-weight: 500;
          font-size: 12.8347px;
          border-radius: 4px;

          @media (min-width: 700px) {
            padding: 13px 22.3336px;
            font-size: 16px;
          }
        `;

      case "small":
        return css`
          padding: 10px 16.2426px;
          font-family: "Inter";
          font-weight: 600;
          font-size: 9.59437px;
          border-radius: 4px;

          @media (min-width: 700px) {
            font-size: 12px;
          }
        `;
    }
  }}

  ${({ btnColor }) => {
    switch (btnColor) {
      case "primario":
        return css`
          background-color: var(--color-primary);
          border: 1.2px solid var(--color-primary);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-primary-focus);
            border: 1.2px solid var(--color-primary-focus);
            color: var(--color-white);
          }
        `;

      case "btnNegative":
        return css`
          background-color: var(--color-primary-negative);
          border: 1.2px solid var(--color-primary-negative);
          color: var(--color-grey-0);
        `;

      case "btnDesability":
        return css`
          background-color: var(--color-grey-1);
          border: 1.2px solid var(--color-grey-1);
          color: var(--color-grey-0);

          &:hover {
            background-color: var(--color-grey-2);
            border: 1.2px solid var(--color-grey-2);
          }
        `;

      case "btnGrey":
        return css`
          background-color: var(--color-grey-3);
          border: 1.2px solid var(--color-grey-3);
          color: var(--color-grey-0);

          &:hover {
            background-color: var(--color-grey-2);
            border: 1.2px solid var(--color-grey-2);
          }
        `;
    }
  }}
`;
