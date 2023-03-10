import React, { FC } from "react";
import style from "./styles.module.scss";
interface ISelectorProps {
  id: string;
  name: string;
  onChange: any;
  value: string;
  label: string;
  options: ISelectorItem[];
}
interface ISelectorItem {
  id: string;
  name: string;
}

const Selector: FC<ISelectorProps> = (props) => {
  return (
    <div className={style.selector}>
      <label className={style.selector__label} htmlFor={props.id}>
        {props.label}
      </label>
      <select
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map((item: ISelectorItem) => (
          <option className={style.container__link} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
