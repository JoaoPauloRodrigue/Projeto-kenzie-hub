import styled from "styled-components";

export const StyledCardTech = styled.li`
  & {
    display: flex;
    height: 49px;
    background-color: var(--color-grey-4);
    border-radius: 4px;
    cursor: pointer;
    align-items: center;
  }

  &:hover {
    background-color: var(--color-grey-2);
  }

  & div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;

    @media (min-width: 700px) {
      padding: 22px;
    }
  }

  & h2 {
    font-weight: 700;
    font-size: 14.21px;
    color: var(--color-white);
  }

  & h6 {
    font-weight: 400;
    font-size: 12.182px;
    color: var(--color-grey-1);
  }
`;
