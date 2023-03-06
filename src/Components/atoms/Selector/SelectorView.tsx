import React from "react";
import style from "./styles.module.scss";

interface ISelectorViewProps {
  id: string;
  name: string;
  onChange: any;
  value: string;
  label: string;
  option: string;
}

function SelectorView({
  id,
  name,
  onChange,
  value,
  label,
  option,
}: ISelectorViewProps) {
  return (
    <div className={style.selector}>
      <label className={style.selector__label} htmlFor={id}>
        {label}
      </label>
      <select id={id} name={name} onChange={onChange} value={value}>
        {option}
      </select>
    </div>
  );
}

export default SelectorView;
