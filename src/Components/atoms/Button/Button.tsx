import React, { FC } from "react";

interface IButtonProps {
  formButtonText: string;
}

const Button: FC<IButtonProps> = (props) => {
  return <input type="submit" value={props.formButtonText} />;
};

export default Button;
