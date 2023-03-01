import React, { useState } from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
import Input from "../../atoms/Input/component";
import Selector from "../../atoms/Selector/component";
import Radio from "../../atoms/Radio/component";
import Checkboxies from "../../atoms/Checkboxies/component";
import Button from "../../atoms/Button/component";
import Checkbox from "../../atoms/Checkbox/component";
import { useFormik } from "formik";
import { store } from "../../../redux/reducers/store";
import { useSelector, useDispatch } from "react-redux";

function NewForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const setOrder = (values: any) => {
    console.log(values);
    dispatch(store.actions.setOrder(values));
    setError(true);
    alert(
      `${values.name}, спасибо за оформление заказа. Информацию о заказе можете проверить на странице заказов.${error}`
    );
  };
  const formContent: any = content.formInfo[0];
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      region: "",
      city: "",
      radio: "",
      checkboxes: [],
      checkbox: "",
    },
    onSubmit: (values, { resetForm }) => {
      setOrder(values);
      setError(false);
      resetForm();
    },
  });

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
                id={"name"}
                name={"name"}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <Input
                placeholder={formContent.placeholderPhone}
                id={"phone"}
                name={"phone"}
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            <div className={style.container__selector}>
              <Selector
                id={"region"}
                name={"region"}
                onChange={formik.handleChange}
                value={formik.values.region}
                label={formContent.selectorRegionLabel}
                options={formContent.selectorRegionOptions}
              />
              <Selector
                id={"city"}
                name={"city"}
                onChange={formik.handleChange}
                value={formik.values.city}
                label={formContent.selectorCityLabel}
                options={
                  formik.values.region == "Минская"
                    ? formContent.minsk
                    : formik.values.region == "Брестcкая"
                    ? formContent.brest
                    : formik.values.region == "Гродненская"
                    ? formContent.grodno
                    : formik.values.region == "Гомельская"
                    ? formContent.gomel
                    : formik.values.region == "Витебская"
                    ? formContent.vitebsk
                    : formik.values.region == "Могилевская"
                    ? formContent.mogilev
                    : formContent.choise
                }
              />
            </div>
            <div className={style.container__radiobtn}>
              <Radio
                id={"radio"}
                name={"radio"}
                onChange={formik.handleChange}
                value={formik.values.radio}
                radioLegend={formContent.radioLegend}
                radioLables={formContent.radioLables}
              />
            </div>
            <div className={style.container__checkboxies}>
              <Checkboxies
                id={"checkboxes"}
                name={"checkboxes"}
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
                id={"checkbox"}
                name={"checkbox"}
                onChange={formik.handleChange}
                value={formik.values.checkbox}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewForm;
