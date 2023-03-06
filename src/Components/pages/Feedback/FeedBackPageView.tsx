import React from "react";
import style from "./styles.module.scss";

interface IFeedBackView {
  feedbackValue: string;
  addFeedback: Function;
  setVisibleArea: any;
  feedbackVesible: boolean;
  feedback: any;
  setfeedbackValue: Function;
  feedbacks: string[];
}

const FeedbackView = ({
  feedbackValue,
  addFeedback,
  setVisibleArea,
  feedbackVesible,
  feedback,
  setfeedbackValue,
  feedbacks,
}: IFeedBackView) => {
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
};

export default FeedbackView;
