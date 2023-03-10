import React, { FC } from "react";
import style from "./styles.module.scss";
import DeleteFeedbackBtn from "../../atoms/DeleteFeedbackBtn/DeleteFeedbackBtn";

interface IFeedBackViewProps {
  feedbackValue: string;
  addFeedback: (feedbackValue: string) => void;
  setVisibleArea: () => void;
  feedbackVesible: boolean;
  deleteFeedback: (id: number) => void;
  setfeedbackValue: Function;
  feedbacks: IFeedback[];
}
interface IFeedback {
  id: number;
  value: string;
}
const FeedbackPageView: FC<IFeedBackViewProps> = (props) => {
  return (
    <div className={style.feedbacks}>
      <div className={style.feedbacks__container}>
        <div className={style.container__empty}>
          {props.feedbacks.length === 0 && (
            <div className={style.empty__message}>Отзывы отсутствуют</div>
          )}
        </div>

        {props.feedbackVesible && (
          <div className={style.container__textArea}>
            <textarea
              name="feedback"
              id="feedback"
              value={props.feedbackValue}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                props.setfeedbackValue(e.target.value)
              }
            ></textarea>
            <div
              className={style.textArea__btn}
              onClick={() => props.addFeedback(props.feedbackValue)}
            >
              Добавить
            </div>
          </div>
        )}
        <div className={style.container__feedback}>
          <div className={style.feedback__item}>
            {props.feedbacks.map((fb: IFeedback) => (
              <div className={style.item} key={fb.id}>
                <div className={style.item__text}>{fb.value}</div>
                <DeleteFeedbackBtn
                  deleteFeedback={props.deleteFeedback}
                  id={fb.id}
                />
              </div>
            ))}
          </div>
        </div>
        {!props.feedbackVesible && (
          <div
            className={style.container__addBtn}
            onClick={props.setVisibleArea}
          >
            Добавить отзыв
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackPageView;
