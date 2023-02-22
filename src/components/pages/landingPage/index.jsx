import { StyledContainerLandingPage } from "./LandingPage";
import { FormLogin } from "../../Form";
import logo from "../../../assets/image/Logo.svg";

export const LandingPage = () => {
  return (
    <>
      <StyledContainerLandingPage>
        <div className="container-logo-and-form">
          <img className="logo-title" src={logo} alt="logo" />
          <FormLogin />
        </div>
      </StyledContainerLandingPage>
    </>
  );
};
