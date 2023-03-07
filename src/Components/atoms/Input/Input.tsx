import React from "react";
import style from "./styles.module.scss";

interface IInputProps {
  id: string;
  name: string;
  onChange: ()=>void;
  placeholder: string;
  value: string[] | string;
}

const Input = ({ id, name, onChange, placeholder, value }: IInputProps) => {
  return (
    <input
      className={style.input}
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
