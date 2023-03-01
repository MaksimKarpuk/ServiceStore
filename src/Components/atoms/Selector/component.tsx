import React from "react";
import style from "./styles.module.scss";

function Selector(props: any) {
  const option: Array<String> = props.options.map(
    (option: string, index: number) => (
      <option className={style.container__link} key={index}>
        {option}
      </option>
    )
  );
  return (
    <div className={style.selector}>
      <label className={style.selector__label} htmlFor={props.id}>
        {props.label}
      </label>
      <select
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        {option}
      </select>
    </div>
  );
}

export default Selector;
