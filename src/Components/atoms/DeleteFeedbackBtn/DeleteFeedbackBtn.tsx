import React, { FC } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./styles.module.scss";

interface IDeleteBtnProps {
  deleteFeedback: (id: number) => void;
  id: number;
}

const DeleteFeedbackBtn: FC<IDeleteBtnProps> = (props) => {
  return (
    <div
      className={style.item__deleteBtn}
      onClick={() => props.deleteFeedback(props.id)}
    >
      <RiDeleteBin5Line className={style.deleteBtn} />
    </div>
  );
};
export default DeleteFeedbackBtn;
