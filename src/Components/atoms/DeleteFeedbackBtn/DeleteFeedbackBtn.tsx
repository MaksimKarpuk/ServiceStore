import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./styles.module.scss";

interface IDeleteFBBtn {
  deleteFeedback: Function;
  index: number;
}

const DeleteFeedbackBtn = ({ deleteFeedback, index }: IDeleteFBBtn) => {
  return (
    <div
      className={style.item__deleteBtn}
      onClick={() => deleteFeedback(index)}
    >
      <RiDeleteBin5Line className={style.deleteBtn} />
    </div>
  );
};
export default DeleteFeedbackBtn;
