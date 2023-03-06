import React from "react";
import SelectorView from "./SelectorView";
import style from "./styles.module.scss";

interface ISelectorProps {
  id: string;
  name: string;
  onChange: any;
  value: string;
  label: string;
  options: string[];
}
const Selector = ({
  id,
  name,
  onChange,
  value,
  label,
  options,
}: ISelectorProps) => {
  const option: any = options.map((item: string, index: number) => (
    <option className={style.container__link} key={index}>
      {item}
    </option>
  ));
  return (
    <SelectorView
      option={option}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      label={label}
    />
  );
};

export default Selector;
