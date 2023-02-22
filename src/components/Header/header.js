import styled from "styled-components";

export const StyledContainerHeaderAndNav = styled.div`
  width: 100%;
  & nav {
    padding: 30px 0px;
    border-bottom: 1px solid var(--color-grey-3);

    @media (min-width: 700px) {
      padding: 30px 0px;
      display: flex;
      justify-content: center;
    }
  }

  .container-nav-and-btn-logOut {
    max-width: 780px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .img-logo-dashboard {
    width: 105.53px;
    height: 14.63px;
  }

  .border {
    border-bottom: 1px solid var(--color-grey-3);
  }

  & header {
    @media (min-width: 700px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .container-header-info-user {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 34.5px 0px;

    @media (min-width: 700px) {
      max-width: 780px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    & h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--color-grey-0);
    }

    & h5 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--color-grey-1);
    }
  }
`;
