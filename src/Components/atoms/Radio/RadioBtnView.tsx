import React from "react";
import style from "./styles.module.scss";

function RadioBtnView(props: any) {
  return (
    <div className={style.radio}>
      <legend>{props.radioLegend}</legend>
      <div className={style.radioBtns}>{props.labels}</div>
    </div>
  );
}

export default RadioBtnView;
