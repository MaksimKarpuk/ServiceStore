import React from "react";
import style from "./styles.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import uuid from "react-uuid";
import DeleteFeedbackBtn from "../../atoms/DeleteFeedbackBtn/DeleteFeedbackBtn";

interface IFeedBackView {
  feedbackValue: string;
  addFeedback: Function;
  setVisibleArea: () => void;
  feedbackVesible: boolean;
  deleteFeedback: Function;
  setfeedbackValue: Function;
  feedbacks: string[];
}
const FeedbackPageView = ({
  feedbackValue,
  addFeedback,
  setVisibleArea,
  feedbackVesible,
  deleteFeedback,
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
        <div className={style.container__feedback}>
          <div className={style.feedback__item}>
            {feedbacks.map((fb: any, index: number) => (
              <div className={style.item} key={index}>
                <div className={style.item__text}>{fb.payload}</div>
                <DeleteFeedbackBtn
                  deleteFeedback={deleteFeedback}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
        {!feedbackVesible && (
          <div className={style.container__addBtn} onClick={setVisibleArea}>
            Добавить отзыв
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackPageView;
