import React from "react";
import style from "./styles.module.scss";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxesView from "./CheckboxesView";
import ICheckboxesProps from "../../../models";

const Checkboxes = ({
  id,
  name,
  onChange,
  value,
  checkboxLegend,
  checkboxLables,
}: ICheckboxesProps) => {
  const labels: any = checkboxLables.map((label: any, index: number) => (
    <div className={style.checkbox} key={index}>
      <Checkbox
        checkboxFormLabel={label.name}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  ));
  return <CheckboxesView labels={labels} checkboxLegend={checkboxLegend} />;
};

export default Checkboxes;
