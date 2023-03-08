
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";
import FeedbackView from "./FeedBackPageView";

const FeedbackPage = () => {
  const dispatch = useDispatch();
  const [feedbackValue, setfeedbackValue] = useState("");
  const feedbacks: string[] = useSelector(
    (state: any) => state.store.feedbacks
  );
  const feedbackVesible: boolean = useSelector(
    (state: any) => state.store.feedbackVesible
  );
  useEffect(() => {
    console.log(feedbacks);
  });
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

  return (
    <FeedbackView
      feedbackValue={feedbackValue}
      addFeedback={addFeedback}
      setVisibleArea={setVisibleArea}
      feedbackVesible={feedbackVesible}
      deleteFeedback={deleteFeedback}
      feedbacks={feedbacks}
      setfeedbackValue={setfeedbackValue}
    />
  );
};

export default FeedbackPage;
