import logo from "../../assets/image/Logo.svg";
import { StyledContainerHeaderAndNav } from "./header";
import { StyledBtn } from "../../styles/button";

export const Header = ({ userLogin, userLogOut }) => {
  return (
    <>
      <StyledContainerHeaderAndNav>
        <nav>
          <div className="container-nav-and-btn-logOut">
            <img className="img-logo-dashboard" src={logo} alt="logo" />
            <StyledBtn
              btnSize="small"
              btnColor="btnGrey"
              onClick={() => userLogOut()}
            >
              Sair
            </StyledBtn>
          </div>
        </nav>
        <div className="border"></div>
        <header>
          {userLogin && (
            <div className="container-header-info-user">
              <h1>{`Olá, ${userLogin.name}`}</h1>
              <h5>{userLogin.course_module}</h5>
            </div>
          )}
        </header>
        <div className="border"></div>
      </StyledContainerHeaderAndNav>
    </>
  );
};
