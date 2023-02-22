import { StyledContainerMainDash } from "./dashboarPage";
import { Header } from "../../Header";
import { BsPlusSquareFill } from "react-icons/bs";
import { CardTechList } from "../../CardTechList";
import { ModalEditAndDelete, ModalRegisterTech } from "../../Modal";
import { useContext, useState } from "react";
import { TechContext } from "../../../Providers/TechContext";

export const DashboardPage = () => {
  const [modal, setModal] = useState(false);

  const { editCard } = useContext(TechContext);

  return (
    <>
      <Header />
      <StyledContainerMainDash>
        <div>
          <div className="container-tech-btn-add">
            <h2>Tecnologias</h2>
            <BsPlusSquareFill
              onClick={() => {
                setModal(true);
              }}
            />
          </div>
          <CardTechList />
          {modal ? <ModalRegisterTech setModal={setModal} /> : null}
          {editCard ? <ModalEditAndDelete /> : null}
        </div>
      </StyledContainerMainDash>
    </>
  );
};
