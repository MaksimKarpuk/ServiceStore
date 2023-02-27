import React from "react";
import style from "./styles.module.scss";

function Input(props: any) {
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
}

export default Input;
