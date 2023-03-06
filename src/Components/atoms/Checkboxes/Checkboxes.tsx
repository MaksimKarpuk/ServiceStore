import React from "react";
import style from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from "../Checkbox/Checkbox";
import ICheckboxesProps from "../../../models";

const CheckboxesView = React.memo(function CheckboxesView({
  id,
  name,
  onChange,
  value,
  checkboxLegend,
  checkboxLables,
}: ICheckboxesProps) {
  return (
    <div className={style.checkboxContainer}>
      <div className={style.legend}>
        <legend>{checkboxLegend}</legend>
        <div className={style.arrow}>
          <IoIosArrowDown />
        </div>
      </div>
      <div className={style.checkboxies}>
        {checkboxLables.map((label: any, index: number) => (
          <div className={style.checkbox} key={index}>
            <Checkbox
              checkboxFormLabel={label.name}
              id={id}
              name={name}
              onChange={onChange}
              value={value}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default CheckboxesView;
