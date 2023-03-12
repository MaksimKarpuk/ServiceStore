import React, { FC } from "react";
interface ICheckboxProps {
  id: string;
  name: string;
  onChange: () => void;
  checkboxFormLabel: string;
  value: string[] | string;
  changeChecked?: () => void;
  checked?: boolean;
}
const Checkbox: FC<ICheckboxProps> = (props) => {
  return (
    <label htmlFor={props.id}>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        onChange={props.changeChecked}
        value={props.checkboxFormLabel}
        checked={props.checked}
      />
      <div>{props.checkboxFormLabel}</div>
    </label>
  );
};

export default Checkbox;
