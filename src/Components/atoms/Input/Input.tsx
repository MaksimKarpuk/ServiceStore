import React, { FC } from "react";
import style from "./styles.module.scss";

interface IInputProps {
  id: string;
  name: string;
  onChange: () => void;
  placeholder: string;
  value: string[] | string;
}

const Input: FC<IInputProps> = (props) => {
  return (
    <input
      className={style.input}
      type="text"
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
