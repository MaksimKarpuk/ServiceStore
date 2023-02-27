import React from "react";
import style from "./styles.module.scss";

function Button(props: any) {
  return (
    <input
      type="submit"
      value={props.formButtonText}
    />
  );
}

export default Button;
