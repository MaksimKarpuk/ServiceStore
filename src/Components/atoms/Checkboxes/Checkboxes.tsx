import React, { FC } from "react";
import style from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import Checkbox from "../Checkbox/Checkbox";
interface IObject {
  id: string;
  name: string;
}
interface ICheckboxesProps {
  id: string;
  name: string;
  onChange: () => void;
  value: string[];
  checkboxLegend: string;
  checkboxLables: IObject[];
}
const CheckboxesView: FC<ICheckboxesProps> = React.memo(function CheckboxesView(
  props
) {
  return (
    <div className={style.checkboxContainer}>
      <div className={style.legend}>
        <legend>{props.checkboxLegend}</legend>
        <div className={style.arrow}>
          <IoIosArrowDown />
        </div>
      </div>
      <div className={style.checkboxies}>
        {props.checkboxLables.map((label: IObject) => (
          <div className={style.checkbox} key={label.id}>
            <Checkbox
              checkboxFormLabel={label.name}
              id={props.id}
              name={props.name}
              onChange={props.onChange}
              value={props.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default CheckboxesView;
