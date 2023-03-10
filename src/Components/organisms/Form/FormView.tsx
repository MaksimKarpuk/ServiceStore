import React, { FC } from "react";
import style from "./styles.module.scss";
import Input from "../../atoms/Input/Input";
import Selector from "../../atoms/Selector/Selector";
import RadioBtn from "../../atoms/Radio/RadioBtn";
import Checkboxes from "../../atoms/Checkboxes/Checkboxes";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import IFormContent from "../../../models";
interface IFormViewProps {
  error: boolean;
  formContent: IFormContent;
  formik: any;
  setError: (error: boolean) => void;
}

const FormView: FC<IFormViewProps> = (props) => {
  return (
    <div id="Заказать" className={style.form}>
      <div className={style.form__container}>
        <div className={style.container__title}>{props.formContent.title}</div>
        <div className={style.container__box}>
          <div className={style.container__subtitle}>
            {props.formContent.subtitle}
          </div>
          <form onSubmit={props.formik.handleSubmit}>
            <div className={style.container__inputs}>
              <div
                className={
                  props.error && !props.formik.values.name
                    ? style.container__error_input
                    : style.container__input
                }
              >
                <Input
                  placeholder={props.formContent.placeholderName}
                  id="name"
                  name="name"
                  onChange={props.formik.handleChange}
                  value={props.formik.values.name}
                />
              </div>
              <div
                className={
                  props.error && !props.formik.values.phone
                    ? style.container__error_input
                    : style.container__input
                }
              >
                <Input
                  placeholder={props.formContent.placeholderPhone}
                  id="phone"
                  name="phone"
                  onChange={props.formik.handleChange}
                  value={props.formik.values.phone}
                />
              </div>
            </div>
            <div className={style.container__selector}>
              <Selector
                id="region"
                name="region"
                onChange={props.formik.handleChange}
                value={props.formik.values.region}
                label={props.formContent.selectorRegionLabel}
                options={props.formContent.selectorRegionOptions}
              />
              <Selector
                id="city"
                name="city"
                onChange={props.formik.handleChange}
                value={props.formik.values.city}
                label={props.formContent.selectorCityLabel}
                options={
                  props.formik.values.region === "Минская"
                    ? props.formContent.minsk
                    : props.formik.values.region === "Брестcкая"
                    ? props.formContent.brest
                    : props.formik.values.region === "Гродненская"
                    ? props.formContent.grodno
                    : props.formik.values.region === "Гомельская"
                    ? props.formContent.gomel
                    : props.formik.values.region === "Витебская"
                    ? props.formContent.vitebsk
                    : props.formik.values.region === "Могилевская"
                    ? props.formContent.mogilev
                    : props.formContent.choise
                }
              />
            </div>
            <div className={style.container__radiobtn}>
              <RadioBtn
                id="radio"
                name="radio"
                onChange={props.formik.handleChange}
                value={props.formik.values.radio}
                radioLegend={props.formContent.radioLegend}
                radioLables={props.formContent.radioLables}
              />
            </div>
            <div className={style.container__checkboxies}>
              <Checkboxes
                id="checkboxes"
                name="checkboxes"
                onChange={props.formik.handleChange}
                value={props.formik.values.checkboxes}
                checkboxLegend={props.formContent.checkboxLegend}
                checkboxLables={props.formContent.checkboxLables}
              />
            </div>
            <div
              className={style.container__button}
              onClick={() => {
                props.setError(true);
              }}
            >
              <Button
                formButtonText={props.formContent.formButtonText}
                checkbox={props.formik.values.checkbox}
                name={props.formik.values.name}
                phone={props.formik.values.phone}
              />
            </div>
            <div
              className={
                props.error && !props.formik.values.checkbox
                  ? style.container__error_checkbox
                  : style.container__checkbox
              }
            >
              <Checkbox
                checkboxFormLabel={props.formContent.checkboxFormLabel}
                id="checkbox"
                name="checkbox"
                onChange={props.formik.handleChange}
                value={props.formik.values.checkbox}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormView;
