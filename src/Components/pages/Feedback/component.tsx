import React, { useState } from "react";
import style from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";
import { RiDeleteBin5Line } from "react-icons/ri";

function FeedbackPage() {
  const dispatch = useDispatch();
  const [feedbackValue, setfeedbackValue] = useState("");
  const addFeedback = (value: string) => {
    dispatch(store.actions.setFeedback(value));
    setfeedbackValue("");
  };
  const deleteFeedback = (index: number) => {
    dispatch(store.actions.deleteFeedback(index));
  };
  const setVisibleArea = () => {
    dispatch(store.actions.setVisibleArea());
  };
  const feedbacks: any = useSelector((state: any) => state.store.feedbacks);
  const feedbackVesible: any = useSelector(
    (state: any) => state.store.feedbackVesible
  );
  const feedback = (
    <div className={style.feedback__item}>
      {feedbacks.map((fb: any, index: number) => (
        <div className={style.item}>
          <div className={style.item__text}>{fb}</div>
          <div
            className={style.item__deleteBtn}
            onClick={() => deleteFeedback(index)}
          >
            <RiDeleteBin5Line className={style.deleteBtn} />
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className={style.feedbacks}>
      <div className={style.feedbacks__container}>
        <div className={style.container__empty}>
          {feedbacks.length === 0 && (
            <div className={style.empty__message}>Отзывы отсутствуют</div>
          )}
        </div>

        {feedbackVesible && (
          <div className={style.container__textArea}>
            <textarea
              name="feedback"
              id="feedback"
              value={feedbackValue}
              onChange={(e) => setfeedbackValue(e.target.value)}
            ></textarea>
            <div
              className={style.textArea__btn}
              onClick={() => addFeedback(feedbackValue)}
            >
              Добавить
            </div>
          </div>
        )}
        <div className={style.container__feedback}>{feedback}</div>
        {!feedbackVesible && (
          <div className={style.container__addBtn} onClick={setVisibleArea}>
            Добавить отзыв
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedbackPage;
