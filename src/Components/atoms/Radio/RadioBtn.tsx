import React from "react";
import RadioBtnView from "./RadioBtnView";
import style from "./styles.module.scss";

interface IRadioBtnProps {
  id: string;
  name: string;
  onChange: any;
  value: string;
  radioLegend: string;
  radioLables: string[];
}

const RadioBtn = (props: IRadioBtnProps) => {
  const labels: any = props.radioLables.map((label: string, index: number) => (
    <div className={style.radioBtn} key={index}>
      <input
        type="radio"
        value={label}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  ));
  return <RadioBtnView labels={labels} radioLegend={props.radioLegend} />;
};

export default RadioBtn;
