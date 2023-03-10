import React, { FC } from "react";
import style from "./styles.module.scss";

interface IRadioLabel {
  id: string;
  name: string;
}
interface IRadioProps {
  id: string;
  name: string;
  onChange: () => void;
  value: string;
  radioLegend: string;
  radioLables: IRadioLabel[];
}

const RadioBtnView: FC<IRadioProps> = (props) => {
  return (
    <div className={style.radio}>
      <legend>{props.radioLegend}</legend>
      <div className={style.radioBtns}>
        {props.radioLables.map((label: IRadioLabel) => (
          <div className={style.radioBtn} key={label.id}>
            <input
              type="radio"
              value={label.name}
              name={props.name}
              id={props.id}
              onChange={props.onChange}
            />
            <label htmlFor={label.name}>{label.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioBtnView;
