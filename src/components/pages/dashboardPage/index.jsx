import { StyledContainerMainDash } from "./dashboarPage";
import { Header } from "../../Header";
import { BsPlusSquareFill } from "react-icons/bs";
import { CardTechList } from "../../CardTechList";
import { ModalEditAndDelete, ModalRegisterTech } from "../../Modal";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <StyledContainerMainDash>
        <div>
          <div className="container-tech-btn-add">
            <h2>Tecnologias</h2>
            <BsPlusSquareFill />
          </div>
          <CardTechList />
          <ModalRegisterTech />
          {/* <ModalEditAndDelete /> */}
        </div>
      </StyledContainerMainDash>
    </>
  );
};
