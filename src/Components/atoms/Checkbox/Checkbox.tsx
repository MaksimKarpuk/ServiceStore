import React, { FC } from "react";

interface ICheckboxProps {
  id: string;
  name: string;
  onChange: () => void;
  checkboxFormLabel: string;
  value: string[] | string;
}
const Checkbox: FC<ICheckboxProps> = (props) => {
  return (
    <label htmlFor={props.id}>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.checkboxFormLabel}
      />
      <div>{props.checkboxFormLabel}</div>
    </label>
  );
};

export default Checkbox;
