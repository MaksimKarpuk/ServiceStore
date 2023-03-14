import React from "react";
import { useField } from "formik";

const FormikRadio = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <>
      <label>
        <input type="radio" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
export default FormikRadio;
