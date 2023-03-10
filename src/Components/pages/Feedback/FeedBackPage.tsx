import React, { useState, useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";
import FeedbackView from "./FeedBackPageView";

interface IFeedback {
  id: number;
  value: string;
}
interface IStote {
  orders: [];
  feedbacks: [];
  loading: boolean;
  feedbackVesible: boolean;
}
interface IState {
  store: IStote;
}
const FeedbackPage: FC = () => {
  const dispatch = useDispatch();
  const [feedbackValue, setfeedbackValue] = useState("");
  const feedbacks: IFeedback[] = useSelector(
    (state: IState) => state.store.feedbacks
  );
  const feedbackVesible: boolean = useSelector(
    (state: IState) => state.store.feedbackVesible
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
