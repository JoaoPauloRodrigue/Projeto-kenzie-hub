import { StyledInput } from "./Input";

export const Input = ({ type, id, placeholder, register, disabled }) => {
  return (
    <>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
      />
    </>
  );
};
