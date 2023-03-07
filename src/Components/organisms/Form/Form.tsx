import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import { store } from "../../../redux/reducers/store";
import { useDispatch } from "react-redux";
import content from "../../../data/content.json";
import FormView from "./FormView";

interface IObject {
  [key: string]: string;
}
// interface IFormContent {
//   title: string;
//   subtitle: string;
//   placeholderName: string;
//   placeholderPhone: string;
//   selectorRegionLabel: string;
//   selectorCityLabel: string;
//   selectorRegionOptions: IObject;
//   selectorCityOptions: IObject;
//   minsk: IObject;
//   brest: IObject;
//   gomel: IObject;
//   grodno: IObject;
//   vitebsk: IObject;
//   mogilev: IObject;
//   choise: IObject;
//   radioLables: IObject;
//   radioLegend: string;
//   checkboxLables: IObject;
//   checkboxLegend: string;
//   formButtonText: string;
//   checkboxFormLabel: string;
// }

interface IValue {
  name: string;
  phone: string;
  region: string;
  city: string;
  radio: string;
  checkboxes: string[];
  checkbox: string;
}

const Form = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  //   const [options, setOptions] = useState([]);
  const setOrder = (values: IValue) => {
    dispatch(store.actions.setOrder(values));
    setError(true);
    alert(
      `${values.name}, спасибо за оформление заказа. Информацию о заказе можете проверить на странице заказов.`
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
  //   const getOptions = useCallback(() => {
  //     switch (formik.values.region) {
  //       case "Минская":
  //         setOptions(formContent.minsk);
  //         break;
  //       case "Брестcкая":
  //         setOptions(formContent.brest);
  //         break;
  //       case "Гродненская":
  //         setOptions(formContent.grodno);
  //         break;
  //       case "Гомельская":
  //         setOptions(formContent.gomel);
  //         break;
  //       case "Витебская":
  //         setOptions(formContent.vitebsk);
  //         break;
  //       case "Могилевская":
  //         setOptions(formContent.mogilev);
  //         break;
  //       default:
  //         return formContent.choise;
  //     }
  //     console.log("Hello");
  //   }, [formik.values.region]);
  return (
    <FormView
      error={error}
      formContent={formContent}
      formik={formik}
      setError={setError}
    />
  );
};

export default Form;
