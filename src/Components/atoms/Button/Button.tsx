import React from "react";

interface IButtonProps {
  formButtonText: string;
  checkbox?: string;
  name?: string;
  phone?: string;
}

function Button({ formButtonText, checkbox, name, phone }: IButtonProps) {
  return (
    <input
      type={
        checkbox === "" || name === "" || phone === "" ? "button" : "submit"
      }
      value={formButtonText}
    />
  );
}

export default Button;
