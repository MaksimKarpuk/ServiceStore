import React, { useCallback, useState, FC } from "react";
import { useFormik } from "formik";
import { store } from "../../../redux/reducers/store";
import { useDispatch } from "react-redux";
import content from "../../../data/content.json";
import FormView from "./FormView";
import IFormContent from "../../../models";
interface IFormValues {
  name: string;
  phone: string;
  region: string;
  city: string;
  radio: string;
  checkboxes: string[];
  checkbox: string;
}

const Form: FC = () => {
  const formContent: IFormContent = content.formInfo[0];
  const dispatch = useDispatch();
  const [error, setError] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const changeChecked = () => {
    setChecked((prev) => !prev);
  };

  const setOrder = (values: IFormValues) => {
    dispatch(store.actions.setOrder(values));
    setError(true);
    alert(
      `${values.name}, спасибо за оформление заказа.
       Информацию о заказе можете проверить на странице заказов.`
    );
  };

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
      if (checked && values.name && values.phone) {
        setOrder(values);
        setError(false);
        setChecked(false);
        resetForm();
      }
    },
  });
  return (
    <FormView
      error={error}
      formContent={formContent}
      formik={formik}
      setError={setError}
      changeChecked={changeChecked}
      checked={checked}
    />
  );
};

export default Form;
