import React from "react";
import style from "./styles.module.scss";
interface ISelectorProps {
  id: string;
  name: string;
  onChange: any;
  value: string;
  label: string;
  options: [];
}
interface IItemValue {
  id: string;
  name: string;
}

const Selector = ({
  id,
  name,
  onChange,
  value,
  label,
  options,
}: ISelectorProps) => {
  return (
    <div className={style.selector}>
      <label className={style.selector__label} htmlFor={id}>
        {label}
      </label>
      <select id={id} name={name} onChange={onChange} value={value}>
        {options.map((item: IItemValue) => (
          <option className={style.container__link} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
