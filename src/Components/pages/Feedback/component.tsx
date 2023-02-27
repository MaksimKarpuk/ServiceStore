import React, { useState } from "react";
import style from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";

function FeedbackPage() {
  const dispatch = useDispatch();
  const [feedbackValue, setfeedbackValue] = useState("");
  const addFeedback = (value: string) => {
    dispatch(store.actions.setFeedback(value));
  };
  const deleteFeedback = (id: number) => {
    dispatch(store.actions.deleteFeedback(id));
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
        <div className={style.item}>{fb}</div>
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
        <div className={style.container__addBtn} onClick={setVisibleArea}>
          Добавить отзыв
        </div>
        {feedbackVesible && (
          <div className={style.container__textArea}>
            <textarea
              name="feedback"
              id="feedback"
              value={feedbackValue}
              onChange={(e) => setfeedbackValue(e.target.value)}
            ></textarea>
            <div onClick={() => addFeedback(feedbackValue)}>Добавить</div>
          </div>
        )}
        <div className={style.container__feedback}>{feedback}</div>
      </div>
    </div>
  );
}

export default FeedbackPage;
