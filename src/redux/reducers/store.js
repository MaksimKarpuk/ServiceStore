import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
  feedbacks: JSON.parse(localStorage.getItem("feedbacks")) || [],
  loading: false,
  feedbackVesible: false,
};

export const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    setOrder(state, { payload }) {
      state.orders.push({ id: uuid(), value: payload });
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    deleteOrder(state, { payload }) {
      state.orders = state.orders.filter((order) => order.id !== payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    setFeedback(state, { payload }) {
      state.feedbacks.push({ id: uuid(), value: payload });
      state.feedbackVesible = false;
      localStorage.setItem("feedbacks", JSON.stringify(state.feedbacks));
    },
    deleteFeedback(state, { payload }) {
      state.feedbacks = state.feedbacks.filter((fb) => fb.id !== payload);
      localStorage.setItem("feedbacks", JSON.stringify(state.feedbacks));
    },
    setVisibleArea(state) {
      state.feedbackVesible = true;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
  },
});
export default store.reducer;
