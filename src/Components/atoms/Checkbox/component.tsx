import React from "react";

function Checkbox(props: any) {
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
}

export default Checkbox;
