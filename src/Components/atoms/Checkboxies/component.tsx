import React from "react";
import style from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from "../Checkbox/component";

function Checkboxies(props: any) {
  const labels: any = props.checkboxLables.map(
    (label: string, index: number) => (
      <div className={style.checkbox} key={index}>
        <Checkbox
          checkboxFormLabel={label}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    )
  );
  return (
    <div className={style.checkboxContainer}>
      <div className={style.legend}>
        <legend>{props.checkboxLegend}</legend>
        <div className={style.arrow}>
          <IoIosArrowDown />
        </div>
      </div>
      <div className={style.checkboxies}>{labels}</div>
    </div>
  );
}

export default Checkboxies;
