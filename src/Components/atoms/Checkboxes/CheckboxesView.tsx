import React from "react";
import style from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

interface CheckboxesViewProps {
  labels: any;
  checkboxLegend: string;
}
const CheckboxesView = ({ labels, checkboxLegend }: CheckboxesViewProps) => {
  return (
    <div className={style.checkboxContainer}>
      <div className={style.legend}>
        <legend>{checkboxLegend}</legend>
        <div className={style.arrow}>
          <IoIosArrowDown />
        </div>
      </div>
      <div className={style.checkboxies}>{labels}</div>
    </div>
  );
};

export default CheckboxesView;
