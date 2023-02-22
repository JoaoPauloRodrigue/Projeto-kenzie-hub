import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { StyledForm, StyledContainerLoginRegister } from "./Form";
import { StyledBtn } from "../../styles/button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";

export const FormLogin = () => {
  const landingPageSchema = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório.")
      .email("É necessário fornecer um E-mail."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .matches(/.{6,}/, "É necessário no mínimo 6 caracteres."),
  });

  const { LoginUser, loding, setLoding } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(landingPageSchema),
  });

  const LoginSubmit = async (data) => {
    await LoginUser(data, setLoding);
  };

  return (
    <StyledContainerLoginRegister>
      <StyledForm onSubmit={handleSubmit(LoginSubmit)}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            register={register("email")}
            disabled={loding}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            register={register("password")}
            disabled={loding}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <StyledBtn
          type="submit"
          btnSize="default"
          btnColor="primario"
          disabled={loding}
        >
          {loding ? "Entrando..." : "Entrar"}
        </StyledBtn>
      </StyledForm>
      <p>Ainda não possui uma conta?</p>
      <Link to="/register">Cadastre-se</Link>
    </StyledContainerLoginRegister>
  );
};

export const FormRegister = () => {
  const RegisterPageSchema = yup.object().shape({
    name: yup
      .string()
      .required("O nome é obrigatório.")
      .min(4, "O nome precisa de no mínimo 4 carateres."),
    email: yup
      .string()
      .required("O email é obrigatório.")
      .email("É necessário fornecer um E-mail."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .matches(/.{6,}/, "É necessário no mínimo 6 caracteres."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "A senha não coincide."),
    bio: yup
      .string()
      .required("A bio é obrigatória.")
      .min(8, "É necessário pelo menos 8 caracteres."),
    contact: yup
      .string()
      .required("É necessário um número de contato.")
      .matches(
        /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/,
        "O contato precisa ser um número com DDD ou rede social"
      ),
    course_module: yup.string().required("Selecionar um módulo é obrigatório"),
  });

  const { registeredUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterPageSchema),
  });

  const RegisterSubmit = async (data) => {
    await registeredUser(data);
    reset();
  };

  return (
    <StyledContainerLoginRegister>
      <StyledForm onSubmit={handleSubmit(RegisterSubmit)}>
        <h2>Cria sua conta</h2>

        <p>Rápido e grátis, vamos nessa</p>

        <div>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            register={register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            register={register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            register={register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirme aqui sua senha"
            register={register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <Input
            type="text"
            id="bio"
            placeholder="Digite aqui sua bio"
            register={register("bio")}
          />
          {errors.bio && <span>{errors.bio.message}</span>}
        </div>

        <div>
          <label htmlFor="contact">Contato</label>
          <Input
            type="text"
            id="contact"
            placeholder="Digite aqui seu contato"
            register={register("contact")}
          />
          {errors.contact && <span>{errors.contact.message}</span>}
        </div>

        <div>
          <label htmlFor="course_module">Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo  (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo  (Backend Avançado)">
              Quarto módulo
            </option>
          </select>
          {errors.course_module?.message && (
            <span>{errors.course_module.message}</span>
          )}
        </div>
        <StyledBtn type="submit" btnSize="default" btnColor="primario">
          Cadastrar
        </StyledBtn>
      </StyledForm>
    </StyledContainerLoginRegister>
  );
};
