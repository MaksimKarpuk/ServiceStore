import React from "react";

import { useField } from "formik";

const FormikInput = ({ ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};
export default FormikInput;
