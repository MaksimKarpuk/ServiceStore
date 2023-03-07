import React from "react";
import style from "./styles.module.scss";

interface IRadioBtnProps {
  id: string;
  name: string;
  onChange: () => void;
  value: string;
  radioLegend: string;
  radioLables: [];
}
interface ILabel {
  id: string;
  name: string;
}

const RadioBtnView = ({
  id,
  name,
  onChange,
  value,
  radioLegend,
  radioLables,
}: IRadioBtnProps) => {
  return (
    <div className={style.radio}>
      <legend>{radioLegend}</legend>
      <div className={style.radioBtns}>
        {radioLables.map((label: ILabel) => (
          <div className={style.radioBtn} key={label.id}>
            <input
              type="radio"
              value={label.name}
              name={name}
              id={id}
              onChange={onChange}
            />
            <label htmlFor={label.name}>{label.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioBtnView;
