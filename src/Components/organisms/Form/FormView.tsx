import React from "react";
import style from "./styles.module.scss";
import Input from "../../atoms/Input/Input";
import Selector from "../../atoms/Selector/Selector";
import RadioBtn from "../../atoms/Radio/RadioBtn";
import Checkboxes from "../../atoms/Checkboxes/Checkboxes";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";

interface IFormView {
  error: boolean;
  formContent: any;
  formik: any;
  setError: Function;
}

const FormView = ({ error, formContent, formik, setError }: IFormView) => {
  return (
    <div id="Заказать" className={style.form}>
      <div className={style.form__container}>
        <div className={style.container__title}>{formContent.title}</div>
        <div className={style.container__box}>
          <div className={style.container__subtitle}>
            {formContent.subtitle}
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div
              className={
                error ? style.container__error_input : style.container__input
              }
            >
              <Input
                placeholder={formContent.placeholderName}
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <Input
                placeholder={formContent.placeholderPhone}
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            <div className={style.container__selector}>
              <Selector
                id="region"
                name="region"
                onChange={formik.handleChange}
                value={formik.values.region}
                label={formContent.selectorRegionLabel}
                options={formContent.selectorRegionOptions}
              />
              <Selector
                id="city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                label={formContent.selectorCityLabel}
                options={
                  formik.values.region === "Минская"
                    ? formContent.minsk
                    : formik.values.region === "Брестcкая"
                    ? formContent.brest
                    : formik.values.region === "Гродненская"
                    ? formContent.grodno
                    : formik.values.region === "Гомельская"
                    ? formContent.gomel
                    : formik.values.region === "Витебская"
                    ? formContent.vitebsk
                    : formik.values.region === "Могилевская"
                    ? formContent.mogilev
                    : formContent.choise
                }
              />
            </div>
            <div className={style.container__radiobtn}>
              <RadioBtn
                id="radio"
                name="radio"
                onChange={formik.handleChange}
                value={formik.values.radio}
                radioLegend={formContent.radioLegend}
                radioLables={formContent.radioLables}
              />
            </div>
            <div className={style.container__checkboxies}>
              <Checkboxes
                id="checkboxes"
                name="checkboxes"
                onChange={formik.handleChange}
                value={formik.values.checkboxes}
                checkboxLegend={formContent.checkboxLegend}
                checkboxLables={formContent.checkboxLables}
              />
            </div>
            <div
              className={style.container__button}
              onClick={() => {
                setError(true);
              }}
            >
              <Button
                formButtonText={formContent.formButtonText}
                checkbox={formik.values.checkbox}
                name={formik.values.name}
                phone={formik.values.phone}
              />
            </div>
            <div
              className={
                error
                  ? style.container__error_checkbox
                  : style.container__checkbox
              }
            >
              <Checkbox
                checkboxFormLabel={formContent.checkboxFormLabel}
                id="checkbox"
                name="checkbox"
                onChange={formik.handleChange}
                value={formik.values.checkbox}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormView;
