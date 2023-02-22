import { Input } from "../Input";
import { StyledModal } from "./Modal";
import { StyledBtn } from "../../styles/button";
import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { useForm } from "react-hook-form";

export const ModalRegisterTech = () => {
  const { cardTechAdd } = useContext(TechContext);

  const { register, handleSubmit } = useForm();

  const techAddSubmit = (formData) => {
    cardTechAdd(formData);
    console.log(formData);
  };

  return (
    <>
      <StyledModal>
        <div className="header-modal-title">
          <h2>Cadastrar Tecnologia</h2>
          <span>X</span>
        </div>
        <form className="formModal" onSubmit={handleSubmit(techAddSubmit)}>
          <div>
            <label htmlFor="title">Nome</label>
            <Input
              type="text"
              id="title"
              placeholder="Digite aqui o nome da tecnologia"
              register={register("title")}
            />
          </div>

          <div>
            <label htmlFor="status">Selecionar Status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
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
            <label htmlFor="title">Nome do projeto</label>
            <Input
              type="text"
              id="title"
              placeholder="Material UI"
              register={register("title")}
            />
          </div>

          <div>
            <label htmlFor="status">Status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
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
