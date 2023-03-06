import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";
import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./styles.module.scss";
import FeedbackView from "./FeedBackView";

const Feedback = () => {
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
    <FeedbackView
      feedbackValue={feedbackValue}
      addFeedback={addFeedback}
      setVisibleArea={setVisibleArea}
      feedbackVesible={feedbackVesible}
      feedback={feedback}
      feedbacks={feedbacks}
      setfeedbackValue={setfeedbackValue}
    />
  );
};

export default Feedback;
