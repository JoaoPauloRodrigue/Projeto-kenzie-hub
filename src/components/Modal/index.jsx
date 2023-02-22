import { Input } from "../Input";
import { StyledModal } from "./Modal";
import { StyledBtn } from "../../styles/button";

export const ModalRegisterTech = () => {
  return (
    <>
      <StyledModal>
        <div className="header-modal-title">
          <h2>Cadastrar Tecnologia</h2>
          <span>X</span>
        </div>
        <form className="formModal">
          <div>
            <label htmlFor="">Nome</label>
            <Input />
          </div>

          <div>
            <label htmlFor="">Selecionar Status</label>
            <select></select>
          </div>

          <div>
            <StyledBtn type="submit" btnSize="default" btnColor="primario">
              Cadastrar tecnologia
            </StyledBtn>
          </div>
        </form>
      </StyledModal>
    </>
  );
};

export const ModalEditAndDelete = () => {
  return (
    <>
      <StyledModal>
        <div className="header-modal-title">
          <h2>Tecnologia Detalhes</h2>
          <span>X</span>
        </div>

        <form className="formModal">
          <div>
            <label htmlFor="">Nome do projeto</label>
            <Input />
          </div>

          <div>
            <label htmlFor="">Status</label>
            <select name="" id=""></select>
          </div>

          <div className="container-btn-modal-edit-delete">
            <StyledBtn type="submit" btnSize="default" btnColor="primario">
              Salvar Alterações
            </StyledBtn>

            <StyledBtn type="submit" btnSize="delete" btnColor="btnGrey2">
              Excluir
            </StyledBtn>
          </div>
        </form>
      </StyledModal>
    </>
  );
};
