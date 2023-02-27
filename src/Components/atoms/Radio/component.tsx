import React from "react";
import style from "./styles.module.scss";

function Radio(props: any) {
  const labels: any = props.radioLables.map((label: string, index: number) => (
    <div className={style.radioBtn} key={index}>
      <input
        type="radio"
        value={label}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        // value={props.value}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  ));
  return (
    <div className={style.radio}>
      <legend>{props.radioLegend}</legend>
      <div className={style.radioBtns}>{labels}</div>
    </div>
  );
}

export default Radio;
