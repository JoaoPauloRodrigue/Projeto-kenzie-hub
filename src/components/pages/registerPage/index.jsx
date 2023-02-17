import { Link } from "react-router-dom";
import logo from "../../../assets/image/Logo.svg";
import { StyledContainerRegisterPage } from "./registerPage";
import { FormRegister } from "../../Form";

export const RegisterPage = () => {
  return (
    <>
      <StyledContainerRegisterPage>
        <div className="container-logo-and-form">
          <div className="container-logo-and-btn">
            <img className="logo-title" src={logo} alt="logo" />
            <Link to="/">Voltar</Link>
          </div>
          <FormRegister />
        </div>
      </StyledContainerRegisterPage>
    </>
  );
};
