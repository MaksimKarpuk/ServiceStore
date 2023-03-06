import React from "react";

interface ICheckboxProps {
  id: string;
  name: string;
  onChange: any;
  checkboxFormLabel: string;
  value: string[] | string;
}
const Checkbox = ({
  id,
  name,
  onChange,
  checkboxFormLabel,
  value,
}: ICheckboxProps) => {
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        value={checkboxFormLabel}
      />
      <div>{checkboxFormLabel}</div>
    </label>
  );
};

export default Checkbox;
