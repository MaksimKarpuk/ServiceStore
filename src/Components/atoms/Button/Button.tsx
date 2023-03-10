import React, { FC } from "react";

interface IButtonProps {
  formButtonText: string;
  checkbox?: string;
  name?: string;
  phone?: string;
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <input
      type={
        props.checkbox === "" || props.name === "" || props.phone === ""
          ? "button"
          : "submit"
      }
      value={props.formButtonText}
    />
  );
};

export default Button;
