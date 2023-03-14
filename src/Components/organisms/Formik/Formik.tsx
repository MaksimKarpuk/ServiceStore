import React, { FC } from "react";
import style from "./styles.module.scss";
import Input from "../../atoms/Input/Input";
import Selector from "../../atoms/Selector/Selector";
import RadioBtn from "../../atoms/Radio/RadioBtn";
import Checkboxes from "../../atoms/Checkboxes/Checkboxes";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import IFormContent from "../../../models";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import FormikInput from "../../atoms/FormikAtoms/Input/FormikInput";
import FormikSelector from "../../atoms/FormikAtoms/Selector/FormikSelector";
import FormikCheckbox from "../../atoms/FormikAtoms/Checkbox/FormikCheckbox";
import FormikRadio from "../../atoms/FormikAtoms/FormikRadio/FormikRadio";
import content from "../../../data/content.json";
import { IoIosArrowDown } from "react-icons/io";

const FormikComponent: FC = () => {
  const formikContent: any = content.formik[0];
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          checkboxes: "",
          terms: false,
          radio: "",
          region: "",
          city: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Не более 15 символов")
            .required("Введите имя"),
          phone: Yup.string()
            .max(20, "Не более 15 символов")
            .required("Введите номер телефона"),
          terms: Yup.boolean()
            .required("Required")
            .oneOf([true], "Необходимо дать согласие."),
          // radio: Yup.string()
          //   .oneOf(
          //     ["Наличными курьеру", "Картой курьеру", "Банковский перевод"],
          //     "Необходимо выбрать."
          //   )
          //   .required("Выберите один из вариантов"),
          // checkboxes: Yup.string()
          //   .oneOf(
          //     [
          //       "Вызов замерщика",
          //       "Упаковка для хрупких предметов",
          //       "Кран",
          //       "Сборка мебели",
          //       "Крупногабаритные предметы",
          //     ],
          //     "Необходимо выбрать."
          //   )
          //   .required("Выберите один из вариантов"),
          // region: Yup.string()
          //   .oneOf(
          //     [
          //       "Минская",
          //       "Брестская",
          //       "Гродненская",
          //       "Гомельская",
          //       "Витебская",
          //       "Могилевская",
          //     ],
          //     "Невалидное значение"
          //   )
          //   .required("Укажите регион"),
          // city: Yup.string()
          //   .oneOf(
          //     [
          //       "Минская",
          //       "Брестская",
          //       "Гродненская",
          //       "Гомельская",
          //       "Витебская",
          //       "Могилевская",
          //     ],
          //     "IНевалидное значение"
          //   )
          //   .required("Укажите город"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        <Form className={style.formik}>
          <div className={style.formik__container}>
            <div className={style.formik__inputs}>
              {formikContent.formikInputs.map((item: any) => (
                <div className={style.formik__input} key={item.id}>
                  <FormikInput
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </div>
            <div className={style.formik__selectors}>
              <div className={style.formik__selector}>
                <FormikSelector label="Укажите область" name="region">
                  <option value="">Выбрать</option>
                  {formikContent.formikSelectorRegionOptions.map(
                    (item: any) => (
                      <option value={item.value} key={item.id}>
                        {item.value}
                      </option>
                    )
                  )}
                </FormikSelector>
              </div>
              <div className={style.formik__selector}>
                <FormikSelector label="Укажите город" name="city">
                  {formikContent.formikSelectorRegionOptions.map(
                    (item: any) => (
                      <option value={item.value} key={item.id}>
                        {item.value}
                      </option>
                    )
                  )}
                </FormikSelector>
              </div>
            </div>
            <div className={style.formik__radioBtns}>
              <div className={style.radioBtns__legend}>
                <legend>{"Способ оплаты"}</legend>
              </div>
              <div className={style.formik__radioBtn}>
                {formikContent.radioLables.map((item: any) => (
                  <div className={style.formik__radioBtn_item} key={item.id}>
                    <FormikRadio
                      type="radio"
                      name="radio"
                      value={item.value}
                      key={item.id}
                    >
                      {item.value}
                    </FormikRadio>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.formik__checkboxes}>
              <div className={style.checkboxes__legend}>
                <legend>{"Дополнительные услуги"}</legend>
                <div className={style.legend__arrow}>
                  <IoIosArrowDown />
                </div>
              </div>
              <div className={style.formik__checkbox}>
                {formikContent.checkboxLables.map((item: any) => (
                  <div className={style.formik__checkbox_item} key={item.id}>
                    <FormikCheckbox
                      type="checkbox"
                      name="checkboxes"
                      value={item.value}
                      key={item.id}
                    >
                      {item.value}
                    </FormikCheckbox>
                  </div>
                ))}
              </div>
            </div>
            <button className={style.formik__submitBTN} type="submit">
              Заказать со скидкой
            </button>
            <div className={style.formik__termCheckbox}>
              <FormikCheckbox name="terms">
                Даю согласие на обработку персональных данных
              </FormikCheckbox>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormikComponent;
